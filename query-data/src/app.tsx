import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

interface PostsPros {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function App() {
  async function fetchData() {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const data = await fetch(url).then((response) => response.json());

    // delay 1.5s
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return data;
  }

  const { data: postsResponse, isLoading } = useQuery<PostsPros[]>({
    queryKey: ["get-posts"],
    queryFn: fetchData,
  });

  return (
    <main className="max-w-5xl w-full my-6 mx-auto">
      {isLoading && (
        <span className="inline-flex text-2xl font-bold">
          <Loader2 className="size-8 animate-spin mr-2" />
          Carregando...
        </span>
      )}

      <ul className="space-y-6">
        {postsResponse?.map((post) => (
          <li key={post.id}>
            <h1 className="font-bold text-xl">{post.title}</h1>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
