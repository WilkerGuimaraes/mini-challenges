import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/posts", () => {
    return HttpResponse.json(
      [
        {
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
      ],
      {
        status: 200,
      }
    );
  }),
];
