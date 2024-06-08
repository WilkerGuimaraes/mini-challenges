import { useQuery } from "@tanstack/react-query";

import { User } from "../types/users";

export function useFetch() {
  const { data: usersResponse } = useQuery<User[]>({
    queryKey: ["get-users"],
    queryFn: async () => {
      const data = await fetch("http://localhost:3333/users").then((response) =>
        response.json()
      );

      return data;
    },
  });

  return { usersResponse };
}
