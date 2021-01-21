import React from "react";
import { createGlobalStyle } from "styled-components";
import WeeklyWorkout from "./components/WeeklyWorkout";
import Template from "./components/Template";
import Main from "./components/Main";
import { Route, Switch } from "react-router-dom";
import Week from "./components/Week";
import Workout from "./components/Workout";

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
          <Route exact path="/" component={Main} />
          <Route exact path="/weeklyworkout" component={WeeklyWorkout} />
          <Route exact path="/weeklyworkout/:weeknum" component={Week} />
          <Route exact path="/weeklyworkout/:weeknum/:workout" component={Workout} />
        </Switch>
      </Template>
    </>
  );
}

export default App;
