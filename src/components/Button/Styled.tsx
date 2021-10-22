import styled from "styled-components";

interface ButtonProps {
  backgroundColor?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme.colors.main};
  border-radius: ${(props) => props.theme.borderRadius};
  border: ${(props) => props.theme.borderRadius} solid
    ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.secondary};
`;
