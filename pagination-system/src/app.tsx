import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { Pagination } from "./components/pagination";

interface PostsProps {
  userId: number;
  id: string;
  title: string;
  body: string;
}

export function App() {
  const { data: postsResponse, isLoading } = useQuery<PostsProps[]>({
    queryKey: ["get-posts"],
    queryFn: async () => {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then((response) => response.json());

      // delay 1.5s
      await new Promise((resolve) => setTimeout(resolve, 1500));

      return data;
    },
  });

  return (
    <div className="max-w-5xl my-6 mx-auto space-y-6">
      {postsResponse && <Pagination />}

      {isLoading && (
        <span className="inline-flex gap-2 font-bold text-2xl">
          <Loader2 className="size-8 animate-spin" />
          Carregando...
        </span>
      )}

      <main className="bg-zinc-800 rounded p-4">
        <ul className="space-y-6">
          {postsResponse?.map((post) => (
            <li key={post.id}>
              <h1 className="font-bold text-2xl">
                {post.id} - {post.title}
              </h1>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
