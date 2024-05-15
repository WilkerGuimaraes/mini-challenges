import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
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
  techs: z
    .array(
      z.object({
        title: z
          .string()
          .min(1, "O título é obrigatório.")
          .transform((title) =>
            title[0].toLocaleUpperCase().concat(title.substring(1))
          ),
        knowledge: z.coerce
          .number()
          .min(20, "O número mínimo tem que ser 20.")
          .max(100, "O número máximo é 100."),
      })
    )
    .min(2, "Insira pelo menos 2 tecnologias."),
});

type UserFormSchema = z.infer<typeof userFormSchema>;

export function App() {
  const [output, setOutput] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<UserFormSchema>({
    resolver: zodResolver(userFormSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "techs",
  });

  function addNewTech() {
    append({ title: "", knowledge: 0 });
  }

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

        <div className="flex flex-col gap-1">
          <div>
            <label htmlFor="techs" className="flex justify-between">
              Tecnologias
              <button
                type="button"
                onClick={addNewTech}
                className="text-emerald-500"
              >
                Adicionar
              </button>
            </label>

            {errors.techs && (
              <span className="text-sm text-red-500">
                {errors.techs.message}
              </span>
            )}
          </div>

          {fields.map((field, index) => (
            <div key={field.id} className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <div className="flex flex-1 flex-col gap-1">
                  <label htmlFor="title">Título:</label>
                  <input
                    type="text"
                    {...register(`techs.${index}.title`)}
                    id="title"
                    className="h-10 px-3 bg-zinc-100 text-black rounded outline-none"
                  />

                  {errors.techs?.[index] && (
                    <span className="text-sm text-red-500">
                      {errors.techs?.[index]?.title?.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="knowledge">Quantidade:</label>
                  <input
                    type="number"
                    {...register(`techs.${index}.knowledge`)}
                    id="knowledge"
                    className="h-10 w-20 px-3 bg-zinc-100 text-black rounded outline-none"
                  />

                  {errors.techs?.[index] && (
                    <span className="text-sm text-red-500">
                      {errors.techs?.[index]?.knowledge?.message}
                    </span>
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={() => remove}
                className="text-orange-500"
              >
                Remover
              </button>
            </div>
          ))}
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
