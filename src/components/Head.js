import React from "react";
import styled from "styled-components";
import { IoArrowBackSharp } from "react-icons/io5";
import { withRouter } from "react-router-dom";

const HeadBlock = styled.div`
  padding: 15px;
  border-bottom: 1px solid #e9ecef;
  display: flex;

  h1 {
    font-size: 30px;
    color: #343a40;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 20px;
  }
`;

const GoBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  margin-left: 10px;
  margin-right: 10px;
`;

function Head({ history }) {
  return (
    <HeadBlock>
      <GoBack>
        <IoArrowBackSharp
          onClick={() => {
            history.goBack();
          }}
        />
      </GoBack>
      <h1>Smolov Squat</h1>
    </HeadBlock>
  );
}

export default withRouter(Head);
