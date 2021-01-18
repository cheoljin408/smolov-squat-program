import React from "react";
import styled from "styled-components";

const TitleBlock = styled.div`
  /* border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef; */

  margin-top: 150px;

  h1 {
    font-size: 45px;
    text-align: center;
  }

  .p1 {
    margin-top: 80px;
    text-align: center;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.8);
  }

  .p2 {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
  }

  .p3 {
    margin-top: 150px;
    text-align: center;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const InsertFormPosition = styled.div``;

const InsertForm = styled.form`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  margin: 5px;
  font-size: 20px;
  text-align: right;
`;

const StartButton = styled.button`
  margin: 5px;
  margin-left: 10px;
`;

function Main({ history }) {
  const input1RM = () => history.push("/weeklyworkout");

  return (
    <TitleBlock>
      <h1>SMOLOV SQUAT</h1>
      <p className="p1">please enter your 1RM</p>
      <InsertFormPosition>
        <InsertForm>
          <Input />
          <p className="p2">kg</p>
          <StartButton onClick={input1RM}>START</StartButton>
        </InsertForm>
      </InsertFormPosition>
      <p className="p3">Shut up and squat!</p>
    </TitleBlock>
  );
}

export default Main;
