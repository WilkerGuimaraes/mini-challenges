import styled from "styled-components";
import { defaultThemes } from "../../../styles/themes/default";

export const TableContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;
`;

export const TableHeader = styled.thead`
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const TableRow = styled.tr``;

export const TableHead = styled.th``;

export const TableBody = styled.tbody`
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: ${(props) => props.theme["gray-300"]};
`;

export const TableCell = styled.td``;

interface IsActiveTableCellProps {
  $isActive: boolean;
}

export const IsActiveTableCell = styled(TableCell)<IsActiveTableCellProps>`
  color: ${(props) =>
    props.$isActive ? defaultThemes["green-500"] : defaultThemes["red-500"]};
`;
