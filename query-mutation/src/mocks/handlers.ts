import { http, HttpResponse } from "msw";

const allUsers = new Map();

export const handlers = [
  http.get("/https://localhost:3333/users", () => {
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
  http.post("/http://localhost:3333/users", async ({ request }) => {
    const newUser = await request.json();

    allUsers.set(newUser?.toString(), newUser);
    return HttpResponse.json(newUser, { status: 201 });
  }),
];
