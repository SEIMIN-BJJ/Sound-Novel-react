import React, { useState, useRef, useEffect } from "react";
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
  background-color: #000;
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
  background: url(${process.env.PUBLIC_URL + "/images/ghost.avif"})
    no-repeat right center;
  background-size: cover;
  animation: time 4s ease-in-out;
  filter: brightness(0.1);

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
`;

const ContentText = styled.p`
  width: 100%;
  height: 10%;
  color: #b2b2b2;
  font-size: 4rem;
  font-family: "ChosunCentennial";
  /* text-shadow:
    0 0 30px #000,
    0 0 60px #b23d39,
    0 0 70px #b23d39,
    0 0 90px #b23d39; */
  color: #f42f2f;
  text-shadow: 
  0 0 30px #6e6e6e;
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

  @media (max-width: 768px) {
    font-size: 10vw;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;

  }

  @media (max-width: 480px) {
    font-size: 10vw;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
  }
`;

const Btn = styled.button`
  width: 10rem;
  height: 5rem;
  position: absolute;
  top: 0;
  right: 0;
  color: #ffffffce;
  font-family: "ChosunCentennial";
  letter-spacing: 3px;
  z-index: 10;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ChapterSix = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying]);

  const typeItContent = `가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.가자.`;
  return (
    <Container>
      <Btn onClick={() => setIsMusicPlaying(!isMusicPlaying)}>
        {isMusicPlaying ? "배경음악 끄기" : "배경음악 켜기"}
      </Btn>
      <audio
        ref={audioRef}
        src={process.env.PUBLIC_URL + "/music/ChapterSix.mp3"}
        loop
      />
      <Link to="/chapterSeven">
        <ContentText>
          <TypeIt
            options={{ speed: 3 }}
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

export default ChapterSix;
