import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem ${props => props.theme.fonts.Roboto}, sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    margin: 0;
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out,
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
