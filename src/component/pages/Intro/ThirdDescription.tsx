import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TypeIt from "typeit-react";

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
`;

const ContentText = styled.p`
  width: 100%;
  height: 10%;
  color: #ffffffce;
  font-size: 2rem;
  font-family: "ChosunCentennial";
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
  animation: time 5s ease-in-out;
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

const ThirdDescription = () => {
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
        src={process.env.PUBLIC_URL + "/music/ThirdAudio.mp3"}
        loop
      />
      <Content>
        <Link to="/">
          <ContentText>
            <TypeIt
              options={{ loop: false, speed: 100 }}
              getBeforeInit={(instance) => {
                instance.type(
                  "이것은 나의 자서전이자 내가 살아온 기묘한 인생의 이야기이다."
                );
                return instance;
              }}
            />
          </ContentText>
        </Link>
      </Content>
    </Container>
  );
};

export default ThirdDescription;
