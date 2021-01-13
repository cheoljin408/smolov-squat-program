import React from "react";
import { createGlobalStyle } from "styled-components";
import WeeklyWorkout from "./components/WeeklyWorkout";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <WeeklyWorkout />
    </>
  );
}

export default App;
