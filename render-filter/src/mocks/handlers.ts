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
          {
            id: "5",
            name: "Charlie Davis",
            age: 30,
            isActive: true,
            hobbies: ["Cycling", "Running"],
            address: {
              street: "654 Birch St",
              city: "Lakeside",
              postalCode: "55667",
            },
          },
          {
            id: "6",
            name: "Diane Evans",
            age: 27,
            isActive: true,
            hobbies: ["Photography", "Yoga"],
            address: {
              street: "987 Cedar St",
              city: "Mapleton",
              postalCode: "77889",
            },
          },
          {
            id: "8",
            name: "Fiona White",
            age: 26,
            isActive: true,
            hobbies: ["Writing", "Drawing"],
            address: {
              street: "456 Walnut St",
              city: "Sunnyvale",
              postalCode: "22334",
            },
          },
          {
            id: "10",
            name: "Hannah Martin",
            age: 29,
            isActive: true,
            hobbies: ["Cooking", "Traveling"],
            address: {
              street: "321 Cherry St",
              city: "Hillside",
              postalCode: "66778",
            },
          },
          {
            id: "11",
            name: "Ian Thompson",
            age: 31,
            isActive: true,
            hobbies: ["Climbing", "Running"],
            address: {
              street: "321 Maple St",
              city: "Evergreen",
              postalCode: "88901",
            },
          },
          {
            id: "13",
            name: "Kyle Brown",
            age: 37,
            isActive: true,
            hobbies: ["Golf", "Cooking"],
            address: {
              street: "123 Birch St",
              city: "Silverlake",
              postalCode: "11245",
            },
          },
          {
            id: "15",
            name: "Michael Clark",
            age: 41,
            isActive: true,
            hobbies: ["Swimming", "Gaming"],
            address: {
              street: "789 Cedar St",
              city: "Riverstone",
              postalCode: "77890",
            },
          },
          {
            id: "16",
            name: "Nancy Hall",
            age: 29,
            isActive: true,
            hobbies: ["Yoga", "Photography"],
            address: {
              street: "321 Elm St",
              city: "Fairview",
              postalCode: "99002",
            },
          },
          {
            id: "18",
            name: "Paula Roberts",
            age: 26,
            isActive: true,
            hobbies: ["Drawing", "Writing"],
            address: {
              street: "987 Aspen St",
              city: "Hillview",
              postalCode: "44567",
            },
          },
          {
            id: "19",
            name: "Quentin Young",
            age: 39,
            isActive: true,
            hobbies: ["Cooking", "Gardening"],
            address: {
              street: "123 Cherry St",
              city: "Clearwater",
              postalCode: "66789",
            },
          },
          {
            id: "21",
            name: "Sammy Carter",
            age: 40,
            isActive: true,
            hobbies: ["Fishing", "Running"],
            address: {
              street: "654 Pine St",
              city: "Brookville",
              postalCode: "99123",
            },
          },
          {
            id: "23",
            name: "Uma Patel",
            age: 35,
            isActive: true,
            hobbies: ["Cooking", "Swimming"],
            address: {
              street: "123 Oak St",
              city: "Sunnydale",
              postalCode: "33467",
            },
          },
          {
            id: "25",
            name: "Wendy Lee",
            age: 34,
            isActive: true,
            hobbies: ["Yoga", "Reading"],
            address: {
              street: "789 Maple St",
              city: "Woodland",
              postalCode: "66789",
            },
          },
          {
            id: "27",
            name: "Yara Simmons",
            age: 29,
            isActive: true,
            hobbies: ["Photography", "Writing"],
            address: {
              street: "654 Elm St",
              city: "Lakeside",
              postalCode: "99012",
            },
          },
          {
            id: "29",
            name: "Abby Rogers",
            age: 33,
            isActive: true,
            hobbies: ["Dancing", "Hiking"],
            address: {
              street: "123 Oak St",
              city: "Mapleton",
              postalCode: "33478",
            },
          },
          {
            id: "30",
            name: "Bruce Wayne",
            age: 45,
            isActive: true,
            hobbies: ["Reading", "Cooking"],
            address: {
              street: "456 Cedar St",
              city: "Gotham",
              postalCode: "55689",
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
