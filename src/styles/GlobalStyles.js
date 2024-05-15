import styled, { createGlobalStyle } from "styled-components";

import BackgroundImage from "../images/backgroundInitial/stars.png";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background-color: #DCF2F1;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    width: 295px;
    padding: 10px;
    border-radius: 50vh;
    align-self: center;
  }
`;

export const Container = styled.section`
  min-height: 100%;
  min-width: 100%;
  background: url(${BackgroundImage});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
