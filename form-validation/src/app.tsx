import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const userFormSchema = z.object({
  name: z
    .string()
    .min(1, "O nome é obrigatório.")
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
    .min(1, "O e-mail é obrigatório.")
    .email("E-mail inválido.")
    .toLowerCase(),
  password: z.string().min(6, "A senha precisa ter pelo menos 6 caracteres."),
});

type UserFormSchema = z.infer<typeof userFormSchema>;

export function App() {
  const [output, setOutput] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormSchema>({
    resolver: zodResolver(userFormSchema),
  });

  function createUser(data: UserFormSchema) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <main className="flex h-screen flex-col justify-center items-center gap-10">
      <h1 className="font-bold text-xl">Validação de Formulário</h1>
      <form
        onSubmit={handleSubmit(createUser)}
        className="flex max-w-xs w-full flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            {...register("name")}
            id="name"
            className="h-10 px-3 bg-zinc-100 text-black rounded outline-none"
          />

          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            {...register("email")}
            id="email"
            className="h-10 px-3 bg-zinc-100 text-black rounded outline-none"
          />

          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            {...register("password")}
            id="password"
            className="h-10 px-3 bg-zinc-100 text-black rounded outline-none"
          />

          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="h-10 bg-emerald-600 font-bold rounded outline-none hover:bg-emerald-500"
        >
          Salvar
        </button>
      </form>

      <pre>{output}</pre>
    </main>
  );
}
