import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme["background"]};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;

    &::-webkit-scrollbar {
      width: 0.5rem;
      margin-left: 1rem;
    }

    &::-webkit-scrollbar-track {
      background: ${(props) => props.theme["background"]};
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme["base-text"]};
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: ${(props) => props.theme["base-label"]};
    }
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }
`;