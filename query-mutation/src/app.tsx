import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { CreateUserForm } from "./components/create-user-form";

interface UsersProps {
  id: string;
  name: string;
  email: string;
}

export function App() {
  const { data: usersResponse, isLoading } = useQuery<UsersProps[]>({
    queryKey: ["get-users"],
    queryFn: async () => {
      const data = await fetch("http://localhost:3333/users").then((response) =>
        response.json(),
      );

      // delay 1.5s
      await new Promise((resolve) => setTimeout(resolve, 1500));

      return data;
    },
  });

  return (
    <main className="mx-auto flex h-screen max-w-6xl flex-col items-center gap-6">
      <CreateUserForm />

      {isLoading && (
        <span className="inline-flex gap-2 text-2xl font-bold">
          <Loader2 className="size-8 animate-spin" />
          Carregando...
        </span>
      )}

      <ul className="space-y-6">
        {usersResponse?.map((user) => (
          <li key={user.id}>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-zinc-500">{user.email}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
