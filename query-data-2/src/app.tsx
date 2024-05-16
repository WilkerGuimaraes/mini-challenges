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
    <main className="max-w-5xl w-full my-6 mx-auto space-y-6">
      <form onSubmit={filterComments} className="space-x-4">
        <input
          type="number"
          name="postId"
          id="postId"
          value={postId}
          onChange={handleChangePostId}
          className="h-10 rounded px-3 bg-zinc-100 text-black outline-none"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="h-10 px-6 bg-emerald-600 font-bold rounded outline-none hover:bg-emerald-500"
        >
          Filtrar
        </button>
        <button
          type="button"
          disabled={isLoading}
          onClick={handleCleanFilter}
          className="h-10 px-6 bg-slate-500 font-bold rounded outline-none hover:bg-slate-600"
        >
          Limpar
        </button>
      </form>

      {isLoading && (
        <span className="inline-flex font-bold text-2xl">
          <Loader2 className="size-8 animate-spin mr-2" />
          Carregando...
        </span>
      )}

      <ul className="space-y-6">
        {commentsResponse?.map((comment) => (
          <li key={comment.id}>
            <h1 className="font-bold text-xl">
              Nome: <span className="font-normal text-sm">{comment.name}</span>
            </h1>
            <h1 className="font-bold text-xl">
              E-mail:{" "}
              <span className="font-normal text-sm">{comment.email}</span>
            </h1>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
