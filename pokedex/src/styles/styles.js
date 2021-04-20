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
  width: 1100px;
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

export const Skills = styled.div`
  margin-top: 14px;
  color: #fff;
  & .grass {
    background-color: #9bcc50;
  }
  & .poison {
    background-color: #b97fc9;
  }
  & .fire {
    background-color: #fd7d24;
  }
  & .water {
    background-color: #4592c4;
  }
  & .flying {
    background-color: #3dc7ef;
  }
  & .bug {
    background-color: #729f3f;
  }
  & span {
    font-size: 0.9rem;
    padding: 6px;
    border-radius: 3px;
  }
  & span:not(:first-of-type) {
    margin-left: 6px;
  }
`