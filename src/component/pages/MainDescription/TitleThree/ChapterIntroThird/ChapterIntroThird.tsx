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
  background: url(${process.env.PUBLIC_URL + "/images/ChapteerIntroThird.jpg"}) no-repeat
    right center;
  background-size: cover;
  animation: time 5s ease-in-out;
  filter: brightness(0.25);
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
    0 0 30px #000,
    0 0 60px #b23d39,
    0 0 90px #b23d39;
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

const ChapterIntroThird = () => {
  return (
    <Container>
      <Link to="/chapterEight">
        <ContentText>3. 그 길로 들어서다.</ContentText>
      </Link>
      <Content />
    </Container>
  );
};

export default ChapterIntroThird;
