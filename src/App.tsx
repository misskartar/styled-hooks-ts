import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

interface ButtonProps {
  backgroundColor?: string
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${props => props.theme.colors.main};
  border-radius: ${props => props.theme.borderRadius};
  border: ${props => props.theme.borderRadius} solid ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.secondary};
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <StyledButton
            as="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </StyledButton>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
