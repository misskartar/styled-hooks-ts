import { StyledButton } from "./Styled";

type Count = number;

interface ButtonProps {
  count: Count;
  setCount: (count: Count) => void;
}

const Button = ({ count, setCount }: ButtonProps) => {
  return (
    <StyledButton as="button" onClick={() => setCount(count++)}>
      Count++
    </StyledButton>
  );
};

export default Button;
