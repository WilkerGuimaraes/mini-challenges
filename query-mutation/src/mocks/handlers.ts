import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/https://localhost:3333", () => {
    return HttpResponse.json(
      {
        users: [
          {
            id: "1",
            name: "John Doe",
            email: "johndoe@email.com",
          },
        ],
      },
      {
        status: 200,
      },
    );
  }),
];
