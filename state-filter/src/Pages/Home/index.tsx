import { useFetch } from "../../hooks/useFetch";
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
  const { usersResponse } = useFetch();

  return (
    <HomeContainer>
      <AsideContainer>
        <form>
          <FormContainer>
            <InputRadioContainer>
              <InputWrapper>
                <input type="radio" name="" id="" />
                <label htmlFor="">Cooking</label>
              </InputWrapper>

              <InputWrapper>
                <input type="radio" name="" id="" />
                <label htmlFor="">Mapleton</label>
              </InputWrapper>

              <InputWrapper>
                <input type="radio" name="" id="" />
                <label htmlFor="">77890</label>
              </InputWrapper>
            </InputRadioContainer>

            <InputWrapper>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Active</label>
            </InputWrapper>

            <ButtonWrapper>
              <Button $variant="filter" type="submit">
                Filter
              </Button>
              <Button $variant="clear" type="button">
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

          {usersResponse?.map((user) => (
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
