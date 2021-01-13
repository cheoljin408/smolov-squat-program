import React from "react";
import styled from "styled-components";
import Template from "./Template";
import Head from "./Head";
import ProgramBox from "./ProgramBox";

const textArray = [
  {
    id: 1,
    week: "Weeks 1-2",
    description: "Introductory Microcycle",
  },
  {
    id: 2,
    week: "Weeks 3-6",
    description: "Base Mesocycle",
  },
  {
    id: 3,
    week: "Weeks 7-8",
    description: "Switching",
  },
  {
    id: 4,
    week: "Weeks 9-12",
    description: "Intense Mesocycle",
  },
  {
    id: 5,
    week: "Week 13",
    description: "Tapering",
  },
];

const BoxBlock = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;
`;

function WeeklyWorkout() {
  const boxs = textArray.map((text) => (
    <ProgramBox week={text.week} description={text.description} />
  ));

  return (
    <Template>
      <Head />
      <BoxBlock>{boxs}</BoxBlock>
    </Template>
  );
}

export default WeeklyWorkout;
