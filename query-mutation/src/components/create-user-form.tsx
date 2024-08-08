import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const userFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "O nome é obrigatório." })
    .transform((name) =>
      name
        .trim()
        .split(" ")
        .map((word) =>
          word[0]
            .toLocaleUpperCase()
            .concat(word.substring(1).toLocaleLowerCase()),
        )
        .join(" "),
    ),
  email: z
    .string()
    .min(1, { message: "O e-mail é obrigatório." })
    .email({ message: "E-mail inválido." })
    .toLowerCase(),
});

type UserFormSchema = z.infer<typeof userFormSchema>;

export function CreateUserForm() {
  const queryClient = useQueryClient();

  const { register, handleSubmit, formState } = useForm<UserFormSchema>({
    resolver: zodResolver(userFormSchema),
  });

  const { mutateAsync } = useMutation({
    mutationFn: async ({ name, email }: UserFormSchema) => {
      // delay 1.5s
      await new Promise((resolve) => setTimeout(resolve, 1500));

      await fetch("http://localhost:3333/users", {
        method: "POST",
        body: JSON.stringify({ name, email }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-users"],
      });
    },
  });

  async function createUser({ name, email }: UserFormSchema) {
    await mutateAsync({ name, email });
  }

  return (
    <div className="my-6 flex flex-col items-center gap-6">
      <form
        onSubmit={handleSubmit(createUser)}
        className="flex items-start gap-4"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-xl">
            Nome:
          </label>
          <input
            type="text"
            {...register("name")}
            id="name"
            className="h-10 rounded bg-zinc-100 px-3 text-black outline-none"
          />

          {formState.errors.name && (
            <span className="text-sm text-red-500">
              {formState.errors.name?.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-xl">
            E-mail:
          </label>
          <input
            type="email"
            {...register("email")}
            id="email"
            className="h-10 rounded bg-zinc-100 px-3 text-black outline-none"
          />

          {formState.errors.email && (
            <span className="text-sm text-red-500">
              {formState.errors.email?.message}
            </span>
          )}
        </div>

        <div className="flex h-[70px] items-end">
          <button
            type="submit"
            className="h-10 w-20 rounded bg-emerald-600 font-bold"
          >
            Enviar
          </button>
        </div>
      </form>

      {formState.isSubmitting && (
        <span className="inline-flex gap-2 text-2xl font-bold">
          <Loader2 className="size-8 animate-spin" />
          Carregando...
        </span>
      )}
    </div>
  );
}
