import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../../../App.scss";

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100%;
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
  width: 100%;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;

  @media (max-width: 768px) {
  width: 100vw;
  height: 100vh;
  }
`;

const ContentText = styled.p`
  width: 100%;
  height: 10%;
  color: #b2b2b2;
  font-size: 2rem;
  font-family: "ChosunCentennial";
  text-shadow:
    0 0 30px #000,
    0 0 60px #b23d39,
    0 0 70px #b23d39,
    0 0 90px #b23d39;
  animation: time 5s ease-in-out;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
