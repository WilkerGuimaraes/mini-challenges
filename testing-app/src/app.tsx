import { useState } from "react";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export function App() {
  const [comments, setComments] = useState<Comment[]>([]);

  function handleGetComments() {
    fetch("https://jsonplaceholder.typicode.com/comments?_page=1_limit=10")
      .then((response) => response.json())
      .then((data) => setComments(data));
  }

  function handleClearComments() {
    setComments([]);
  }

  return (
    <main className="mx-auto my-6 h-screen max-w-5xl">
      <div className="space-x-4">
        <button
          onClick={handleGetComments}
          className="h-10 rounded bg-emerald-600 px-4"
        >
          Show comments
        </button>
        <button
          onClick={handleClearComments}
          className="h-10 rounded bg-slate-600 px-4"
        >
          Clear comments
        </button>
      </div>

      {comments && (
        <div className="grid grid-cols-3 gap-4 space-y-4 py-6">
          {comments.map((comment) => (
            <ul key={comment.id} className="rounded bg-zinc-800 p-4">
              <li>
                <h2 className="text-2xl font-semibold">{comment.name}</h2>
                <span className="text-zinc-500">{comment.email}</span>
                <p>{comment.body}</p>
              </li>
            </ul>
          ))}
        </div>
      )}
    </main>
  );
}
