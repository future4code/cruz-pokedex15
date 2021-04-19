import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Rajdhani', sans-serif;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    width: 100%;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
  display: flex;
  align-items: center;
`;

/* export const ButtonReset = styled.button`
  cursor: pointer;
  border: 0;
  padding: 15px 20px;
  background: inherit;
  border-radius: 2px;
  transition: all 0.3s ease;
  &:focus {
    outline: none;
  }
`
 */