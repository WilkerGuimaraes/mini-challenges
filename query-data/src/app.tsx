import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { ChangeEvent, useState } from "react";

interface PostsProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function App() {
  const [user, setUser] = useState(0);
  const [userId, setUserId] = useState(0);

  async function fetchData() {
    let url = "https://jsonplaceholder.typicode.com/posts";

    if (userId !== 0) {
      url += `?userId=${userId}`;
    }

    const data = await fetch(url).then((response) => response.json());

    // delay 1.5s
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return data;
  }

  const { data: postsResponse, isLoading } = useQuery<PostsProps[]>({
    queryKey: ["get-posts", userId],
    queryFn: fetchData,
  });

  function handleChangeUser(event: ChangeEvent<HTMLInputElement>) {
    const inputUser = parseInt(event.target.value);
    setUser(inputUser);
  }

  function filterForm(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    setUserId(user);
  }

  async function handleCleanFilter() {
    setUser(0);
    setUserId(0);
  }

  return (
    <main className="mx-auto my-6 w-full max-w-5xl">
      <div className="flex justify-between">
        <form onSubmit={filterForm}>
          <div className="space-x-2">
            <input
              type="radio"
              name="userId"
              id="userId1"
              value={1}
              checked={user === 1}
              onChange={handleChangeUser}
            />
            <label htmlFor="userId1">Usuário 1</label>
          </div>

          <div className="space-x-2">
            <input
              type="radio"
              name="userId"
              id="userId2"
              value={2}
              checked={user === 2}
              onChange={handleChangeUser}
            />
            <label htmlFor="userId2">Usuário 2</label>
          </div>

          <div className="space-x-2">
            <input
              type="radio"
              name="userId"
              id="userId3"
              value={3}
              checked={user === 3}
              onChange={handleChangeUser}
            />
            <label htmlFor="userId3">Usuário 3</label>
          </div>

          <div className="space-x-2">
            <input
              type="radio"
              name="userId"
              id="userId4"
              value={4}
              checked={user === 4}
              onChange={handleChangeUser}
            />
            <label htmlFor="userId4">Usuário 4</label>
          </div>

          <div className="space-x-2">
            <input
              type="radio"
              name="userId"
              id="userId5"
              value={5}
              checked={user === 5}
              onChange={handleChangeUser}
            />
            <label htmlFor="userId5">Usuário 5</label>
          </div>

          <div className="my-4 space-x-4">
            <button
              type="submit"
              disabled={isLoading}
              className="h-10 rounded bg-emerald-600 px-6 font-bold outline-none hover:bg-emerald-500"
            >
              Filtrar
            </button>

            <button
              type="button"
              onClick={handleCleanFilter}
              disabled={isLoading}
              className="h-10 rounded bg-slate-500 px-6 font-bold outline-none hover:bg-neutral-400"
            >
              Limpar
            </button>
          </div>
        </form>

        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <h2 className="text-2xl">
            {userId !== 0 ? `Usuário: ${userId}` : null}
          </h2>
          <p className="text-xl">
            Total de dados:{" "}
            <span className="font-bold text-lime-600">
              {postsResponse?.length}
            </span>
          </p>
        </div>
      </div>

      {isLoading && (
        <span className="inline-flex text-2xl font-bold">
          <Loader2 className="mr-2 size-8 animate-spin" />
          Carregando...
        </span>
      )}

      <div className="grid grid-cols-3 gap-4">
        {postsResponse?.map((post) => (
          <ul key={post.id} className="flex">
            <li className="rounded bg-zinc-800 p-6">
              <h1 className="text-xl font-bold">{post.title}</h1>
              <p>{post.body}</p>
            </li>
          </ul>
        ))}
      </div>
    </main>
  );
}
