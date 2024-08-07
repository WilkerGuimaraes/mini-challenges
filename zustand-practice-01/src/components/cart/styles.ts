import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CartList = styled.ul`
  display: grid;
  grid-template-columns: 1;
  gap: 1.5rem;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    width: 400px;
    list-style: none;
    border: 1px solid ${(props) => props.theme["zinc-800"]};
    padding: 12px;
    border-radius: 4px;
    font-size: 18px;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.75);
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme["zinc-800"]};
  color: ${(props) => props.theme["white"]};
  padding: 8px;
  font-weight: 700;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.theme["zinc-700"]};
    cursor: pointer;
  }
`;
