import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { ChangeEvent, useState } from "react";

interface CommentsProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export function App() {
  const [postId, setPostId] = useState(0);
  const [comments, setComments] = useState(0);

  async function fetchComments() {
    let url = "https://jsonplaceholder.typicode.com/comments";

    if (comments !== 0) {
      url += `?postId=${comments}`;
    }

    const data = fetch(url).then((response) => response.json());

    // delay 1.5s
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return data;
  }

  const { data: commentsResponse, isLoading } = useQuery<CommentsProps[]>({
    queryKey: ["get-comments", comments],
    queryFn: fetchComments,
  });

  function handleChangePostId(event: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    setPostId(value);
  }

  function filterComments(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    setComments(postId);
  }

  function handleCleanFilter() {
    setPostId(0);
    setComments(0);
  }

  return (
    <main className="mx-auto w-full max-w-5xl space-y-6 py-12">
      <div className="flex justify-between">
        <form onSubmit={filterComments} className="space-x-4">
          <input
            type="number"
            name="postId"
            id="postId"
            value={postId}
            onChange={handleChangePostId}
            className="h-10 rounded bg-zinc-100 px-3 text-black outline-none"
            aria-label="inputElement"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="h-10 rounded bg-emerald-600 px-6 font-bold outline-none hover:bg-emerald-500"
          >
            Filtrar
          </button>
          <button
            type="button"
            disabled={isLoading}
            onClick={handleCleanFilter}
            className="h-10 rounded bg-slate-500 px-6 font-bold outline-none hover:bg-slate-600"
          >
            Limpar
          </button>
        </form>

        <div className="flex flex-1 items-end justify-center">
          <span className="text-2xl font-semibold">
            {commentsResponse?.length !== undefined
              ? `Total de comentários: ${commentsResponse?.length}`
              : null}
          </span>
        </div>
      </div>

      {isLoading && (
        <span className="inline-flex text-2xl font-bold">
          <Loader2 className="mr-2 size-8 animate-spin" />
          Carregando...
        </span>
      )}

      <div className="grid grid-cols-3 gap-4">
        {commentsResponse?.map((comment) => (
          <ul key={comment.id} className="flex">
            <li className="rounded bg-zinc-800 p-4">
              <h1 className="text-xl font-bold">
                Nome:{" "}
                <span className="text-sm font-normal">{comment.name}</span>
              </h1>
              <h1 className="text-xl font-bold">
                E-mail:{" "}
                <span className="text-sm font-normal">{comment.email}</span>
              </h1>
              <p>{comment.body}</p>
            </li>
          </ul>
        ))}
      </div>
    </main>
  );
}
