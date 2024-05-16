import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

interface CommentsProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export function App() {
  async function fetchComments() {
    const url = "https://jsonplaceholder.typicode.com/comments";

    const data = fetch(url).then((response) => response.json());

    // delay 1.5s
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return data;
  }

  const { data: commentsResponse, isLoading } = useQuery<CommentsProps[]>({
    queryKey: ["get-comments"],
    queryFn: fetchComments,
  });

  return (
    <main className="max-w-5xl w-full my-6 mx-auto">
      {isLoading && (
        <span className="inline-flex font-bold text-xl">
          <Loader2 className="size-8 animate-spin mr-2" />
          Carregando...
        </span>
      )}

      <ul className="space-y-6">
        {commentsResponse?.map((comment) => (
          <li key={comment.id}>
            <h1 className="font-bold text-xl">
              Name: <span className="font-normal text-sm">{comment.name}</span>
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
