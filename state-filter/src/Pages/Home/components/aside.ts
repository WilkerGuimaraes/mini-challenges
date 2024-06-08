import styled from "styled-components";

export const AsideContainer = styled.aside`
  max-width: 238px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme["gray-700"]};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InputRadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 1.15rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.75rem;
`;

interface ButtonProps {
  $variant: "filter" | "clear";
}

export const Button = styled.button<ButtonProps>`
  height: 2.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme["gray-100"]};
  background-color: ${(props) => {
    switch (props.$variant) {
      case "filter":
        return props.theme["green-500"];
      case "clear":
        return props.theme["slate-700"];
      default:
        return props.theme["gray-500"];
    }
  }};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => {
      switch (props.$variant) {
        case "filter":
          return props.theme["green-700"];
        case "clear":
          return props.theme["slate-800"];
        default:
          return props.theme["gray-600"];
      }
    }};
  }
`;
