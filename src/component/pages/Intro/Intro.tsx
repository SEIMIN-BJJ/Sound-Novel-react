import React from "react";
import styled from "styled-components";
import "../../../App.scss";

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  /* background-color: #000; */
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
  background-color: #1d1212;
`;

const ContentText = styled.p`
  width: 100%;
  height: 10%;
  color: #fff;
  font-size: 2.5rem;
  font-family: "ChosunGs";
  position: relative;
  animation: foganimation 5s infinite alternate;
  -webkit-filter: blur(1px) grayscale(0.2) saturate(1.2) sepia(0.2);
  filter: blur(1px) grayscale(0.2) saturate(1.2) sepia(0.2);
  cursor: pointer;

  @keyframes foganimation {
    0% {
      opacity: 0.1;
    }
    22% {
      opacity: 0.5;
    }
    40% {
      opacity: 0.28;
    }
    58% {
      opacity: 0.4;
    }
    80% {
      opacity: 0.16;
    }
    100% {
      opacity: 0.1;
    }
  }
  /* @keyframes flicker {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      text-shadow:
        0 0 4px #000,
        0 0 11px #000,
        0 0 19px #000,
        0 0 40px #000,
        0 0 80px #ff0000,
        0 0 90px #ff0000,
        0 0 100px #ff0000,
        0 0 150px #ff0000;
    }
    20%,
    25%,
    55% {
      text-shadow: none;
    }
  } */
`;

const Intro = () => {
  return (
    <Container>
      <Content>
        <ContentText>
          이 이야기는 지인의 실화를 바탕으로 구성 되었습니다.
        </ContentText>
      </Content>
    </Container>
  );
};
export default Intro;
