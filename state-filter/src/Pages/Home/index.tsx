import { useFilter } from "../../hooks/useFilter";

import {
  AsideContainer,
  Button,
  ButtonWrapper,
  FormContainer,
  InputRadioContainer,
  InputWrapper,
} from "./components/aside";
import {
  IsActiveTableCell,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/usersTable";
import { HomeContainer } from "./styles";

export function Home() {
  const {
    tempFilter,
    filteredUsers,
    isFilteredusers,
    handleFilterChange,
    handleTempFilterChange,
    handleCleanFilter,
  } = useFilter();

  return (
    <HomeContainer>
      <AsideContainer>
        <form onSubmit={handleFilterChange}>
          <FormContainer>
            <InputRadioContainer>
              <InputWrapper>
                <input
                  type="radio"
                  name="hobby"
                  id="hobby"
                  value={"Cooking"}
                  checked={tempFilter.hobby === "Cooking"}
                  onChange={handleTempFilterChange}
                />
                <label htmlFor="hobby">Cooking</label>
              </InputWrapper>

              <InputWrapper>
                <input
                  type="radio"
                  name="city"
                  id="city"
                  value={"Mapleton"}
                  checked={tempFilter.city === "Mapleton"}
                  onChange={handleTempFilterChange}
                />
                <label htmlFor="city">Mapleton</label>
              </InputWrapper>

              <InputWrapper>
                <input
                  type="radio"
                  name="postalCode"
                  id="postalCode"
                  value={"77890"}
                  checked={tempFilter.postalCode === "77890"}
                  onChange={handleTempFilterChange}
                />
                <label htmlFor="postalCode">77890</label>
              </InputWrapper>
            </InputRadioContainer>

            <InputWrapper>
              <input
                type="checkbox"
                name="isActive"
                id="isActive"
                checked={tempFilter.isActive}
                onChange={handleTempFilterChange}
              />
              <label htmlFor="isActive">Active</label>
            </InputWrapper>

            <ButtonWrapper>
              <Button $variant="filter" type="submit">
                Filter
              </Button>
              <Button
                $variant="clear"
                type="button"
                onClick={handleCleanFilter}
              >
                Clean
              </Button>
            </ButtonWrapper>
          </FormContainer>
        </form>
      </AsideContainer>

      <TableContainer>
        <h1>Users table</h1>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Is active</TableHead>
              <TableHead>Hobbies</TableHead>
              <TableHead>City</TableHead>
              <TableHead>Postal Code</TableHead>
            </TableRow>
          </TableHeader>

          {isFilteredusers &&
            filteredUsers?.map((user) => (
              <TableBody>
                <TableRow>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <IsActiveTableCell $isActive={user.isActive}>
                    {String(user.isActive)}
                  </IsActiveTableCell>
                  <TableCell>{user.hobbies}</TableCell>
                  <TableCell>{user.address.city}</TableCell>
                  <TableCell>{user.address.postalCode}</TableCell>
                </TableRow>
              </TableBody>
            ))}
        </Table>
      </TableContainer>
    </HomeContainer>
  );
}
