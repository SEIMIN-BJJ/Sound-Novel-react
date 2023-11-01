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
  background: url(${process.env.PUBLIC_URL + "/images/SecondBack.jpg"})
    no-repeat right center;
  background-size: cover;
  animation: time 10s ease-in-out;
  filter: brightness(0.25);

  @keyframes time {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ContentText = styled.p`
  width: 100%;
  height: 10%;
  color: #ffffffce;
  font-size: 1.5rem;
  font-family: "ChosunCentennial";
  text-shadow:
    0 0 30px #b23d39,
    0 0 60px #b23d39,
    0 0 70px #b23d39,
    0 0 90px #b23d39;
  color:#e7e7e7;
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
`;

const typeItContent = `
실제로 보여지지 않아야 할 존재들로 인해
<br />
<br />
나의 인생은 크게 달라지기 시작한다.
<br />
<br />
그것도 아주 크게 달라지게 되고,
<br />
<br />
나는 이승과 저승, 중간의 세계에
<br />
<br />
갇혀버렸다는 생각이 들었다.`;

const SecondDescription = () => {
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

  return (
    <Container>
      <Btn onClick={() => setIsMusicPlaying(!isMusicPlaying)}>
        {isMusicPlaying ? "배경음악 끄기" : "배경음악 켜기"}
      </Btn>
      <audio
        ref={audioRef}
        src={process.env.PUBLIC_URL + "/music/SecondAudio.mp3"}
        loop
      />
      <Link to="/thirddescription">
        <ContentText>
          <TypeIt
            options={{ loop: false, speed: 40 }}
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

export default SecondDescription;
