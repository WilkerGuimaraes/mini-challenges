import { ChangeEvent, useState } from "react";
import { useFetch } from "./useFetch";

interface FilterProps {
  isActive: boolean | null;
  hobby: string;
  city: string;
  postalCode: string;
  age: string;
}

export function useFilter() {
  const { usersResponse } = useFetch();

  const [filter, setFilter] = useState<FilterProps>({
    isActive: null,
    hobby: "",
    city: "",
    postalCode: "",
    age: "",
  });

  const [tempFilter, setTempFilter] = useState<FilterProps>({
    isActive: null,
    hobby: "",
    city: "",
    postalCode: "",
    age: "",
  });

  function handleTempFilterChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    if (name === "isActive") {
      setTempFilter({
        isActive: value === "true",
        hobby: "",
        city: "",
        postalCode: "",
        age: "",
      });
    } else if (name === "hobby") {
      setTempFilter({
        isActive: null,
        hobby: value,
        city: "",
        postalCode: "",
        age: "",
      });
    } else if (name === "city") {
      setTempFilter({
        isActive: null,
        hobby: "",
        city: value,
        postalCode: "",
        age: "",
      });
    } else if (name === "postalCode") {
      setTempFilter({
        isActive: null,
        hobby: "",
        city: "",
        postalCode: value,
        age: "",
      });
    } else if (name === "age") {
      setTempFilter({
        isActive: null,
        hobby: "",
        city: "",
        postalCode: "",
        age: value,
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
      postalCode: "",
      age: "",
    });

    setTempFilter({
      isActive: null,
      hobby: "",
      city: "",
      postalCode: "",
      age: "",
    });
  }

  const filteredUsers = usersResponse?.data.filter((user) => {
    const matchesIsActive =
      filter.isActive === null || user.isActive === filter.isActive;
    const matchesHobby = !filter.hobby || user.hobbies.includes(filter.hobby);
    const matchesCity = !filter.city || user.address.city === filter.city;
    const matchesPostalCode =
      !filter.postalCode || user.address.postalCode === filter.postalCode;
    const matchesAge =
      !filter.age || (filter.age === "over30" && user.age > 30);

    return (
      matchesIsActive &&
      matchesHobby &&
      matchesCity &&
      matchesPostalCode &&
      matchesAge
    );
  });

  const isFilteredUsers =
    filter.isActive !== null ||
    filter.hobby !== "" ||
    filter.city !== "" ||
    filter.postalCode !== "" ||
    filter.age !== "";

  return {
    tempFilter,
    filteredUsers,
    isFilteredUsers,
    handleTempFilterChange,
    handleFilterChange,
    handleClearFilters,
  };
}
