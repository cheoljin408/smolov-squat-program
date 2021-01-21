import React from "react";
import styled from "styled-components";
import Head from "./Head";
import ProgramBox from "./ProgramBox";

const BoxBlock = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const TextBoxBlock = styled.div`
  width: 370px;
  border: 1px solid #e9ecef;
  margin: 0 auto;
  margin-top: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 10px;

  h2 {
    margin-top: 0;
  }

  p {
    margin-top: 0;
  }
`;

function Week12() {
  const weeks = [
    {
      week: 'Week 1',
      link: "/weeklyworkout/week12/workout1"
    },
    {
      week: 'Week 2',
      link: "/weeklyworkout/week12/workout2"
    },
  ];

  const boxs = weeks.map((text) => (
    <ProgramBox week={text.week} link={text.link}/>
  ));

  return (
    <>
      <Head />
      <BoxBlock>
        {boxs}
      </BoxBlock>
    </>
  );
}

function Week36() {
  const weeks = [
    {
      week: 'Week 3',
      link: "/weeklyworkout/week36/workout3"
    },
    {
      week: 'Week 4',
      link: "/weeklyworkout/week36/workout4"
    },
    {
      week: 'Week 5',
      link: "/weeklyworkout/week36/workout5"
    },
    {
      week: 'Week 6',
      link: "/weeklyworkout/week36/workout6"
    },
  ];

  const boxs = weeks.map((text) => (
    <ProgramBox week={text.week} link={text.link} />
  ));

  return (
    <>
      <Head />
      <BoxBlock>
        {boxs}
      </BoxBlock>
    </>
  );
}

function Week78() {
  const title = "Switching";
  const description1 = "You will be grateful for the opportunity to rest those weary legs as this is a two week period with no regulated set and rep pattern. Smolov recommends dynamic effort squatting and it is best not to go above 60% of your new 1RM. In fact, you may prefer to stay closer to 50% and don’t go above 3 reps during a dynamic effort day. Some lifters like to follow Westside Barbell principles and box squat 12 sets of 2 but it’s really up to you."
  const description2 = "Smolov also advocates negative squats which involve using a weight greater than your 1RM but only concentrating on the descent. In other words, you unrack the bar, squat down slowly until the bar rests on preset safety bars and leave it. Other explosive exercises that can be performed include box jumps and deep squat jumps. This period should be little more than an active rest so listen to your body and don’t go overboard.";

  return (
    <>
      <Head />
      <TextBoxBlock>
        <h2>{title}</h2>
        <p>{description1}</p>
        <br />
        <p>{description2}</p>
      </TextBoxBlock>
    </>
  );
}

function Week912() {
  const weeks = [
    {
      week: 'Week 9',
      link: "/weeklyworkout/week912/workout9"
    },
    {
      week: 'Week 10',
      link: "/weeklyworkout/week912/workout10"
    },
    {
      week: 'Week 11',
      link: "/weeklyworkout/week912/workout11"
    },
    {
      week: 'Week 12',
      link: "/weeklyworkout/week912/workout12"
    },
  ];

  const boxs = weeks.map((text) => (
    <ProgramBox week={text.week} link={text.link} />
  ));

  return (
    <>
      <Head />
      <BoxBlock>
        {boxs}
      </BoxBlock>
    </>
  );
}

function Week13() {
  const weeks = [
    {
      week: 'Week 13',
      link: "/weeklyworkout/week13/workout13"
    },
  ];

  const boxs = weeks.map((text) => (
    <ProgramBox week={text.week} link={text.link} />
  ));

  return (
    <>
      <Head />
      <BoxBlock>
        {boxs}
      </BoxBlock>
    </>
  );
}

function Week({ match }) {
  const weeknum = match.params['weeknum'];
  
  switch(weeknum) {
    case "week12" :
      return <Week12 />;
    case "week36" :
      return <Week36 />;
    case "week78" :
      return <Week78 />;
    case "week912" :
      return <Week912 />;
    case "week13" :
      return <Week13 />;
    default :
      return <></>;
  }
}

export default Week;
