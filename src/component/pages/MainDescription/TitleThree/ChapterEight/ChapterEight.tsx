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
  background: url(${process.env.PUBLIC_URL + "/images/ghost.jpeg"})
    no-repeat right center;
  background-size: cover;
  animation: time 10s ease-in-out;
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
    background-size: contain;
  }

    @media (max-width: 480px) {
    background-size: contain;
  }
`;

const ContentText = styled.p`
  width: 100%;
  height: 10%;
  color: #ffffffce;
  font-size: 1.2rem;
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
  left: 77%;
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

      @media (max-width: 768px) {
    font-size: 3.5vw;
    left: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    text-align:left;

  }

  @media (max-width: 480px) {
    font-size: 3.5vw;
    left: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    text-align:left;
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

const ChapterText = [
  {
    title:
    "난 여지껏 보이면 안되는 존재들을 봐왔음에도 믿지 않았다.`내가 심신이 힘들어서 그런거다. 안보인다, 안보인다. 잘못 보는거다. `그런식으로 부정을 해왔다. 그러다가 어느 순간 정말 보이지 않게 되었다. `어느 곳을 가도 어디를 봐도 보이지 않게 되었다.`좋아해야 할 순간에 나는 왜?라는 생각과 함께 허무함이 동시에 밀려왔다.`진즉 이렇게 할 걸. 다행으로 생각하자. 이제 나도 평범하게 지내면 된다.`하지만 그건 착각이였고 이제는 하다하다 산 사람들의 마음을 알 수 있게 되었다.`산 사람, 죽은 사람의 생각들을 알 수 있게 된 것이다.`정말 기가 막힐 노릇이였다. 더 한것이 왔구나 싶었다.`내가 원해서 알게 되는 것이 아닌 강제로 머리에 박아넣는 느낌이였다.`정말 진심을 다해서 알고 싶지 않았다."
  },
];
const ChapterEight = () => {
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
          src={process.env.PUBLIC_URL + "/music/ChapterEight.mp3"}
          loop
        />
        <Link to="/chapterNine">
          {ChapterText.map((text, index) => (
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

export default ChapterEight;
