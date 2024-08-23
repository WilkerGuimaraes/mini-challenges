import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:3333/users", () => {
    return HttpResponse.json(
      {
        data: [
          {
            id: "1",
            name: "John Doe",
            age: 28,
            isActive: true,
            hobbies: ["Reading", "Swimming", "Gaming"],
            address: {
              street: "123 Main St",
              city: "Springfield",
              postalCode: "12345",
            },
          },
          {
            id: "3",
            name: "Alice Johnson",
            age: 22,
            isActive: true,
            hobbies: ["Dancing", "Traveling"],
            address: {
              street: "789 Oak St",
              city: "Riverside",
              postalCode: "11223",
            },
          },
        ],
      },
      {
        status: 200,
      }
    );
  }),
];
