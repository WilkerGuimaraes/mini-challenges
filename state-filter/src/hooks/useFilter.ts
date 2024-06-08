import { ChangeEvent, useState } from "react";

import { useFetch } from "./useFetch";

interface FilterProps {
  hobby: string;
  city: string;
  postalCode: string;
  isActive?: boolean;
}

export function useFilter() {
  const { usersResponse } = useFetch();

  const [filter, setFilter] = useState<FilterProps>({
    hobby: "",
    city: "",
    postalCode: "",
    isActive: false,
  });

  const [tempFilter, setTempFilter] = useState<FilterProps>({
    hobby: "",
    city: "",
    postalCode: "",
    isActive: false,
  });

  function handleTempFilterChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target;

    if (type === "radio") {
      setTempFilter({
        ...tempFilter,
        hobby: name === "hobby" ? value : "",
        city: name === "city" ? value : "",
        postalCode: name === "postalCode" ? value : "",
      });
    } else if (type === "checkbox") {
      setTempFilter((prev) => ({
        ...prev,
        isActive: checked,
      }));
    } else {
      setTempFilter((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  function handleFilterChange(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    setFilter(tempFilter);
  }

  function handleCleanFilter() {
    setFilter({
      hobby: "",
      city: "",
      postalCode: "",
      isActive: false,
    });

    setTempFilter({
      hobby: "",
      city: "",
      postalCode: "",
      isActive: false,
    });
  }

  const filteredUsers = usersResponse?.filter((user) => {
    const matchesHobby = !filter.hobby || user.hobbies.includes(filter.hobby);
    const matchesCity = !filter.city || user.address.city === filter.city;
    const matchesPostalCode =
      !filter.postalCode || user.address.postalCode === filter.postalCode;
    const matchesIsActive =
      !filter.isActive || user.isActive === filter.isActive;

    return matchesHobby && matchesCity && matchesPostalCode && matchesIsActive;
  });

  const isFilteredusers =
    filter.hobby !== "" || filter.city !== "" || filter.postalCode !== "";

  return {
    tempFilter,
    filteredUsers,
    isFilteredusers,
    handleTempFilterChange,
    handleFilterChange,
    handleCleanFilter,
  };
}
