import { Root } from "../types/users.types";
import { useQuery } from "@tanstack/react-query";

export function useFetch() {
  const { data: usersResponse } = useQuery<Root>({
    queryKey: ["get-users"],
    queryFn: async () => {
      const data = await fetch(
        "http://localhost:3333/users?_page=1&_per_page=30"
      ).then((response) => response.json());

      return data;
    },
  });

  return { usersResponse };
}
