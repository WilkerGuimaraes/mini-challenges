import { zodResolver } from "@hookform/resolvers/zod";
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
            .concat(word.substring(1).toLocaleLowerCase())
        )
        .join(" ")
    ),
  email: z
    .string()
    .min(1, { message: "O e-mail é obrigatório." })
    .email({ message: "E-mail inválido." })
    .toLowerCase(),
});

type UserFormSchema = z.infer<typeof userFormSchema>;

export function CreateUserForm() {
  const { register, handleSubmit, formState } = useForm<UserFormSchema>({
    resolver: zodResolver(userFormSchema),
  });

  function createUser({ name, email }: UserFormSchema) {
    console.log({ name, email });
  }

  return (
    <div className="my-6">
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
            className="h-10 px-3 bg-zinc-100 text-black rounded outline-none"
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
            className="h-10 px-3 bg-zinc-100 text-black rounded outline-none"
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
            className="h-10 w-20 bg-emerald-600 rounded font-bold"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
