import React from "react";
import styled from "styled-components";
import { IoArrowForwardSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Box = styled.div`
  width: 450px;
  height: 80px;
  border: 1px solid #e9ecef;
  margin: 0 auto;
  margin-bottom: 30px;
  padding-left: 30px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  display: flex;

  div {
    width: 370px;
    display: flex;
  }

  .p2 {
    width: 230px;
  }

  .p1 {
    width: 130px;
    font-size: 18px;
    font-weight: 500;
  }
`;

const GoForward = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: right;
`;

function ProgramBox({ week, description, link, history }) {

  return (
    <Box>
      <div>
        <p className="p1">{week}</p>
        <p className="p2">{description}</p>
      </div>
      <GoForward>
        <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
          <IoArrowForwardSharp />
        </Link>
      </GoForward>
    </Box>
  );
}
export default ProgramBox;
