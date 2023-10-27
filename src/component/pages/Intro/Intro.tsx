import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../../App.scss";

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
  color: #ffffffce;
  font-size: 2.5rem;
  font-family: "ChosunGs";
  animation: flicker 5s infinite alternate;
  cursor: pointer;

  @keyframes time {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes flicker {
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
        0 0 90px #b23d39,
        0 0 80px #b23d39,
        0 0 90px #b23d39,
        0 0 100px #b23d39,
        0 0 150px #b23d39,
        0 0 190px #b23d39,
        0 0 250px #b23d39;
    }
    20%,
    25%,
    55% {
      text-shadow: none;
    }
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
