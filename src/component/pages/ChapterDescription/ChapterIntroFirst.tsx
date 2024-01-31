import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../../App.scss";

const Container = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
  width: 100vw;
  height: 100vh;
  }
`;

const ContentText = styled.p`
  width: 100%;
  height: auto;
  color: #ffffffce;
  font-size: 2rem;
  font-family: "ChosunCentennial";
  animation: time 5s ease-in-out;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
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
  font-size: 2rem;
  }
`;

const ChapterIntro = () => {
  return (
    <Container>
      <Link to="/chapterone">
        <ContentText>1. 태어나다. </ContentText>
      </Link>
      <Content />
    </Container>
  );
};

export default ChapterIntro;
