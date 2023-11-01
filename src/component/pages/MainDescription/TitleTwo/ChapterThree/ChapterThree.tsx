import React, { useState, useRef, useEffect } from "react";
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
  background: url(${process.env.PUBLIC_URL + "/images/jang.jpg"})
    no-repeat right center;
  background-size: cover;
  animation: time 10s ease-in-out;
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

const ChapterTwoText = [
  {
    title:
      "유독 한가지 사진에 눈이 가는데 이때 당시의 기억은 어렴풋이 있다.`그 기억은 어떤 할아버지와 놀고 있던 기억이었다.'그것'은 사진속의 어르신 이였으리라.`나는 그 할아버지와 노는 것이 너무 재미있었다.`그 후 어떤 아주머니가 애기 엄마, 아빠 어딨냐고 소리를 치던 모습이였다.`그 아주머니의 얼굴을 지금도 선명히 기억한다.`무엇인가를 보고 겁에 질려 한 표정을, 그 후의 기억은 없다.`예상이지만 아주머니는 나의 무슨 행동에 놀라서 소리를 치지 않았을까.`아주머니가 소리를 지를만큼 무언가를 한 것은 아니였을까.`그리고 상복을 입었다면 집안의 어르신이였을텐데 누구셨을까.`그것이 처음으로 보지 말아야 할 것을 본 날이며 인생이 변화가 된 날이 아니였을까.",
  },
];
const ChapterThree = () => {
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
          src={process.env.PUBLIC_URL + "/music/ChtaterTrhee.mp3"}
          loop
        />
        <Link to="/">
          {ChapterTwoText.map((text, index) => (
            <ContentText key={index}>
              {text.title.split("`").map((line, lineIndex) => (
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

export default ChapterThree;
