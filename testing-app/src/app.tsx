import { useState } from "react";

interface Posts {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export function App() {
  const [posts, setPosts] = useState<Posts[]>([]);

  function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/comments?_page=1_limit=10")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }

  function cleanPosts() {
    setPosts([]);
  }

  return (
    <main className="mx-auto my-6 h-screen max-w-5xl">
      <div className="space-x-4">
        <button onClick={getPosts} className="h-10 rounded bg-emerald-600 px-4">
          Show posts
        </button>
        <button onClick={cleanPosts} className="h-10 rounded bg-slate-600 px-4">
          Clean posts
        </button>
      </div>

      {posts && (
        <div className="grid grid-cols-3 gap-4 space-y-4 py-6">
          {posts.map((post) => (
            <ul key={post.id} className="rounded bg-zinc-800 p-4">
              <li>
                <h2 className="text-2xl font-semibold">{post.name}</h2>
                <span className="text-zinc-500">{post.email}</span>
                <p>{post.body}</p>
              </li>
            </ul>
          ))}
        </div>
      )}
    </main>
  );
}
