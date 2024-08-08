import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/https://jsonplaceholder.typicode.com/comments", () => {
    return HttpResponse.json(
      [
        {
          postId: 1,
          id: 1,
          name: "id labore ex et quam laborum",
          email: "Eliseo@gardner.biz",
          body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
        },
      ],
      {
        status: 200,
      },
    );
  }),
];
