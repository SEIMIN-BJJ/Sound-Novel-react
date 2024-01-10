import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../../../App.scss";

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;

  @media (max-width: 768px) {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  }
`;

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
  width: 100vw;
  height: 100vh;

  }
`;

const ContentText = styled.p`
  width: 100vw;
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
  width: 100vw;
  height: 100vh;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }
`;

const Intro = () => {
  return (
    <Container>
      <Content>
        <Link to="/introsecond">
          <ContentText>
            이 이야기는 지인의 실화를 바탕으로 구성 되었습니다.
          </ContentText>
        </Link>
      </Content>
    </Container>
  );
};
export default Intro;
