import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "./Form";

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

  const createUserForm = useForm<UserFormSchema>({
    resolver: zodResolver(userFormSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = createUserForm;

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
      <FormProvider {...createUserForm}>
        <form
          onSubmit={handleSubmit(createUser)}
          className="flex max-w-xs w-full flex-col gap-4"
        >
          <Form.Field>
            <Form.Label htmlFor="name">Nome:</Form.Label>
            <Form.Input type="text" name="name" id="name" />

            <Form.ErrorMessage field="name" />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="email">E-mail:</Form.Label>
            <Form.Input type="email" name="email" id="email" />

            <Form.ErrorMessage field="email" />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="password">Senha:</Form.Label>
            <Form.Input type="password" name="password" id="password" />

            <Form.ErrorMessage field="password" />
          </Form.Field>

          <Form.Field>
            <div>
              <Form.Label htmlFor="techs" className="flex justify-between">
                Tecnologias
                <button
                  type="button"
                  onClick={addNewTech}
                  className="text-emerald-500"
                >
                  Adicionar
                </button>
              </Form.Label>

              {errors.techs && (
                <span className="text-xs text-red-500">
                  {errors.techs.message}
                </span>
              )}
            </div>

            {fields.map((field, index) => (
              <div
                key={field.id}
                className="flex flex-col gap-2 border-b-2 py-4"
              >
                <div className="flex justify-between gap-2">
                  <div className="flex flex-1 flex-col gap-1">
                    <Form.Label htmlFor="title">Título:</Form.Label>
                    <Form.Input
                      type="text"
                      name={`techs.${index}.title`}
                      id="title"
                    />

                    {errors.techs?.[index] && (
                      <span className="text-xs text-red-500">
                        {errors.techs?.[index]?.title?.message}
                      </span>
                    )}
                  </div>

                  <Form.Field>
                    <Form.Label htmlFor="knowledge">Quantidade:</Form.Label>
                    <Form.Input
                      type="number"
                      name={`techs.${index}.knowledge`}
                      id="knowledge"
                      className="w-24"
                    />

                    {errors.techs?.[index] && (
                      <span className="text-xs text-red-500">
                        {errors.techs?.[index]?.knowledge?.message}
                      </span>
                    )}
                  </Form.Field>
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
          </Form.Field>

          <button
            type="submit"
            className="h-10 bg-emerald-600 font-bold rounded outline-none hover:bg-emerald-500"
          >
            Salvar
          </button>
        </form>
      </FormProvider>

      <pre>{output}</pre>
    </main>
  );
}
