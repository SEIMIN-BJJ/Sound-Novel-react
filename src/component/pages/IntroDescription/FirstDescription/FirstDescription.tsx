import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TypeIt from "typeit-react";
import "../../../../App.scss";

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
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
  width: 100vw;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  background: url(${process.env.PUBLIC_URL + "/images/FirstBackground.webp"})
    no-repeat right center;
  background-size: contain;
  animation: time 10s ease-in-out;
  filter: brightness(0.12);

  @keyframes time {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  }

`;

const ContentText = styled.p`
  width: 100%;
  height: 10%;
  color: #b2b2b2;
  font-size: 1.5rem;
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
`;

const FirstDescription = () => {
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

  const typeItContent = `
      나는 보이지 않아야 할 것들이 보인다.<br /><br />
      또한, 느껴진다.<br /><br />
      어릴 적의 나는 모든 사람들이 나와 같은 줄 알았다.<br /><br />
      그래서 당연한 듯이 '그것'들과 대화를 하였고,<br /><br />어느샌가 나는 귀신을 보는 불길(不吉)한 아이로 소문이 나있었다.`;

  return (
    <Container>
      <Btn onClick={() => setIsMusicPlaying(!isMusicPlaying)}>
        {isMusicPlaying ? "배경음악 끄기" : "배경음악 켜기"}
      </Btn>
      <audio
        ref={audioRef}
        src={process.env.PUBLIC_URL + "/music/FirstAudio.mp3"}
        loop
      />
      <Link to="/seconddescription">
        <ContentText>
          <TypeIt
            options={{ loop: false, speed: 60 }}
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

export default FirstDescription;
