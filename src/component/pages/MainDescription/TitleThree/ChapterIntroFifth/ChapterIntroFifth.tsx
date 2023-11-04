import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TypeIt from "typeit-react";
import "../../../../../App.scss";

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 10vw;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  background: url(${process.env.PUBLIC_URL + "/images/cloud.jpeg"}) no-repeat
    right center;
  background-size: cover;
  animation: time 2s ease-in-out;
  filter: brightness(0.7);
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
  }

    @media (max-width: 480px) {
    background-size: cover;
  }
`;

const ContentText = styled.p`
  width: 100%;
  height: 10%;
  color: #ffffffce;
  font-size: 3rem;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow:
  0 0 30px #fff,
  0 0 60px #ccc,
  0 0 70px #ccc,
  0 0 90px #ccc;
  font-family: "Gmarket-Bold";
  letter-spacing: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: time 4s ease-in-out;
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
    font-size: 6vw;
    left: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 3rem;
    text-align:left;

  }

  @media (max-width: 480px) {
    font-size: 6vw;
    left: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 3rem;
    text-align:left;
  }
`;
const typeItContent = `
세상은 아직 살만하다.`;
const ChapterIntroFifth = () => {
  return (
    <Container>
      <Link to="/">
        <ContentText>
          <TypeIt
            options={{ loop: false, speed: 300 }}
            getBeforeInit={(instance) => {
              instance.type(typeItContent);
              return instance;
            }}
          />
        </ContentText>
      </Link>
      <Content />
    </Container>
  );
};

export default ChapterIntroFifth;
