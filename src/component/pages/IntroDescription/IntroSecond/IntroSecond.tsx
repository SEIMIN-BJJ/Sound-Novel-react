import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../../../App.scss";

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  background-color: #000;
`;

const Content = styled.div`
  width: 100%;
  margin-bottom: 10vw;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
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
