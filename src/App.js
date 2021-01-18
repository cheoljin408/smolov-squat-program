import React from "react";
import { createGlobalStyle } from "styled-components";
import WeeklyWorkout from "./components/WeeklyWorkout";
import Template from "./components/Template";
import Main from "./components/Main";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Template>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/weeklyworkout" component={WeeklyWorkout} />
          {/* <Route path="/weeklyworkout/:week" component={} /> */}
        </Switch>
      </Template>
    </>
  );
}

export default App;
