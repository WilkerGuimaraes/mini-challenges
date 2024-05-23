import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";

import { Root } from "./types/users.types";

interface FilterProps {
  isActive: boolean | null;
  hobby: string;
  city: string;
}

export function App() {
  const { data: usersResponse } = useQuery<Root>({
    queryKey: ["get-users"],
    queryFn: async () => {
      const data = await fetch(
        "http://localhost:3333/users?_page=1&_per_page=30"
      ).then((response) => response.json());

      return data;
    },
  });

  const [filter, setFilter] = useState<FilterProps>({
    isActive: null,
    hobby: "",
    city: "",
  });

  const [tempFilter, setTempFilter] = useState<FilterProps>({
    isActive: null,
    hobby: "",
    city: "",
  });

  function handleTempFilterChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    if (name === "isActive") {
      setTempFilter({
        isActive: value === "true",
        hobby: "",
        city: "",
      });
    } else if (name === "hobby") {
      setTempFilter({
        isActive: null,
        hobby: value,
        city: "",
      });
    } else if (name === "city") {
      setTempFilter({
        isActive: null,
        hobby: "",
        city: value,
      });
    }
  }

  function handleFilterChange(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    setFilter(tempFilter);
  }

  function handleClearFilters() {
    setFilter({
      isActive: null,
      hobby: "",
      city: "",
    });

    setTempFilter({
      isActive: null,
      hobby: "",
      city: "",
    });
  }

  const filteredUsers = usersResponse?.data.filter((user) => {
    const matchesIsActive =
      filter.isActive === null || user.isActive === filter.isActive;
    const matchesHobby = !filter.hobby || user.hobbies.includes(filter.hobby);
    const matchesCity = !filter.city || user.address.city === filter.city;

    return matchesIsActive && matchesHobby && matchesCity;
  });

  const isFilteredUsers =
    filter.isActive !== null || filter.hobby !== "" || filter.city !== "";

  return (
    <main className="flex max-w-7xl h-screen mx-auto bg-zinc-800">
      <div className="flex justify-center items-center max-w-sm w-full bg-zinc-600">
        <form onSubmit={handleFilterChange} className="flex flex-col gap-4">
          <div className="inline-flex gap-1">
            <input
              type="radio"
              name="isActive"
              id="active"
              value={"true"}
              checked={tempFilter.isActive === true}
              onChange={handleTempFilterChange}
            />
            <label htmlFor="active">Ativado</label>
          </div>

          <div className="inline-flex gap-1">
            <input
              type="radio"
              name="isActive"
              id="desactive"
              value={"false"}
              checked={tempFilter.isActive === false}
              onChange={handleTempFilterChange}
            />
            <label htmlFor="desactive">Desativado</label>
          </div>

          <div className="inline-flex gap-1">
            <input
              type="radio"
              name="hobby"
              id="hobby"
              value={"Cooking"}
              checked={tempFilter.hobby === "Cooking"}
              onChange={handleTempFilterChange}
            />
            <label htmlFor="hobby">Cooking</label>
          </div>

          <div className="inline-flex gap-1">
            <input
              type="radio"
              name="city"
              id="city"
              value={"Mapleton"}
              checked={tempFilter.city === "Mapleton"}
              onChange={handleTempFilterChange}
            />
            <label htmlFor="city">Mapleton</label>
          </div>

          <button
            type="submit"
            className="h-10 w-20 font-bold rounded bg-emerald-600"
          >
            Filtrar
          </button>
          <button
            type="button"
            onClick={handleClearFilters}
            className="h-10 w-20 font-bold rounded bg-slate-600"
          >
            Limpar
          </button>
        </form>
      </div>

      <div className="flex-1 p-4">
        <table className="w-full text-center">
          <thead className="font-bold text-2xl">
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Ativado</th>
              <th>Hobbies</th>
              <th>Cidade</th>
            </tr>
          </thead>

          {isFilteredUsers &&
            filteredUsers?.map((user) => (
              <tbody key={user.id} className="text-xl">
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td
                    className={
                      user.isActive ? "text-emerald-500" : "text-red-500"
                    }
                  >
                    {String(user.isActive)}
                  </td>
                  <td>{user.hobbies.join(" e ")}</td>
                  <td>{user.address.city}</td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </main>
  );
}
