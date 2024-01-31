import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../../../App.scss";

const Container = styled.section`
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;

`;

const ContentText = styled.div`
  width: 100%;
  height: 100vh;
  color: #b2b2b2;
  font-size: 2rem;
  font-family: "ChosunCentennial";
  text-shadow:
    0 0 30px #000,
    0 0 60px #b23d39,
    0 0 70px #b23d39,
    0 0 90px #b23d39;
  animation: time 5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @keyframes time {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
  font-size: 1.2rem;
  }
`;

const Intro = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/introsecond");
  };
  return (
    <Container>
      <ContentText onClick={handleClick}>
        이 이야기는 지인의 실화를 바탕으로 구성 되었습니다.
      </ContentText>
    </Container>
  );
};
export default Intro;
