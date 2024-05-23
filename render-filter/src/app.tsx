import { useQuery } from "@tanstack/react-query";

import { Root } from "./types/users.types";

export function App() {
  const { data: usersResponse } = useQuery<Root>({
    queryKey: ["get-users"],
    queryFn: async () => {
      const data = await fetch(
        "http://localhost:3333/users?_page=1&_per_page=30"
      ).then((response) => response.json());

      return data;
    },
  });

  return (
    <main className="flex max-w-7xl mx-auto">
      <div className="flex-1 p-4">
        <table className="w-full text-center">
          <thead className="font-bold text-2xl">
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Ativado</th>
              <th>Hobbies</th>
              <th>Cidade</th>
            </tr>
          </thead>

          {usersResponse?.data.map((user) => (
            <tbody key={user.id} className="text-xl">
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td
                  className={
                    user.isActive ? "text-emerald-500" : "text-red-500"
                  }
                >
                  {String(user.isActive)}
                </td>
                <td>{user.hobbies.join(" e ")}</td>
                <td>{user.address.city}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </main>
  );
}
