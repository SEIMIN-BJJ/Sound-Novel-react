import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../../../../App.scss";

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  background-color: #000;
`;

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  background: url(${process.env.PUBLIC_URL + "/images/shamanWorld.jpg"}) no-repeat
    right center;
  background-size: cover;
  animation: time 5s ease-in-out;
  filter: brightness(0.20);
  @keyframes time {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 768px) {
    background-size: cover;
    background-position: center center;
  }

    @media (max-width: 480px) {
    background-size: cover;
    background-position: center center;
  }
`;

const ContentText = styled.p`
  width: 100%;
  height: 10%;
  color: #ffffffce;
  font-size: 2rem;
  font-family: "ChosunCentennial";
  animation: time 5s ease-in-out;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow:
    0 0 4px #888,
    0 0 11px #888,
    0 0 19px #888,
    0 0 90px #888888,
    0 0 80px #888888,
    0 0 90px #888888,
    0 0 100px #888888,
    0 0 150px #888888,
    0 0 190px #888888,
    0 0 250px #888888;
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

const ChapterIntroFourth = () => {
  return (
    <Container>
      <Link to="/chapterTen">
        <ContentText>4. 신의 제자가 되다.</ContentText>
      </Link>
      <Content />
    </Container>
  );
};

export default ChapterIntroFourth;
