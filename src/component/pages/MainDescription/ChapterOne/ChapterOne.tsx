import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  background: url(${process.env.PUBLIC_URL + "/images/hospital.jpg"}) no-repeat
    right center;
  background-size: cover;
  animation: time 10s ease-in-out;
  filter: brightness(0.15);

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
  left: 70%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  letter-spacing: 2px;
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

const ChapterOneText = [
  {
    title:
      "나는 그분들만 안다면 아시는 참으로 얄궂은 날에 어느 한 산부인과에서 태어났다.\n들은 바로는 어머니라는 사람도, 나도 참 고생하면서 태어났다고 한다.\n 어릴 적 고생하면 말년에 잘된다는 얘기를 그리 썩 좋아하지 않는다.\n그것만큼 터무니 없는 말이 어딨으랴.\n\n더군다나 어릴 적 기억을 떠올려 보려 해도 도무지 기억이 나질 않는다.\n사진 속의 나의 모습은 아주 해맑은 아이였고 순수한 모습을 하고 있었다.\n하지만 사진 속의 나의 모습은 전혀 기억이 나질 않는다.\n애초부터 없었던 듯이.",
  },
];
const ChapterOne = () => {
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
    <>
      <Container>
        <Btn onClick={() => setIsMusicPlaying(!isMusicPlaying)}>
          {isMusicPlaying ? "배경음악 끄기" : "배경음악 켜기"}
        </Btn>
        <audio
          ref={audioRef}
          src={process.env.PUBLIC_URL + "/music/ChapterOne.mp3"}
          loop
        />
        <Link to="/chaptertwo">
          {ChapterOneText.map((text, index) => (
            <ContentText key={index}>
              {text.title.split("\n").map((line, lineIndex) => (
                <span key={lineIndex}>
                  {lineIndex > 0 && <br />}
                  {line}
                </span>
              ))}
            </ContentText>
          ))}
        </Link>
        <Content />
      </Container>
    </>
  );
};

export default ChapterOne;
