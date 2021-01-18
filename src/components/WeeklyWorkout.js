import React from "react";
import styled from "styled-components";
import Head from "./Head";
import ProgramBox from "./ProgramBox";

const textArray = [
  {
    id: 1,
    week: "Weeks 1-2",
    description: "Introductory Microcycle",
    link: "/weeklyworkout/week12",
  },
  {
    id: 2,
    week: "Weeks 3-6",
    description: "Base Mesocycle",
    link: "/weeklyworkout/week36",
  },
  {
    id: 3,
    week: "Weeks 7-8",
    description: "Switching",
    link: "/weeklyworkout/week78",
  },
  {
    id: 4,
    week: "Weeks 9-12",
    description: "Intense Mesoycle",
    link: "/weeklyworkout/week912",
  },
  {
    id: 5,
    week: "Week 13",
    description: "Tapering",
    link: "/weeklyworkout/week13",
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
    <ProgramBox
      week={text.week}
      description={text.description}
      link={text.link}
    />
  ));

  return (
    <>
      <Head />
      <BoxBlock>{boxs}</BoxBlock>
    </>
  );
}

export default WeeklyWorkout;
