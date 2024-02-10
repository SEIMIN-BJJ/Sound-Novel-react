import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../../App.scss";

const Container = styled.section`
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;

  @media (max-width: 768px) {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  }
`;

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
  height: auto;
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }
`;

const IntroSecond = () => {
  return (
    <Container>
      <Content>
        <Link to="/firstdescription">
          <ContentText>
            또한 실제사건을 기반으로 하나 허구성의 내용이 들어가 있으며 <br />
            <br />
            작품에 등장하는 인물들 및 사건개요는 제작자와 무관함을 밝힙니다.
          </ContentText>
        </Link>
      </Content>
    </Container>
  );
};
export default IntroSecond;
