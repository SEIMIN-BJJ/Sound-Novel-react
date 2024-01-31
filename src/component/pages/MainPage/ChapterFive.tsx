import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../../App.scss";

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
  background: url(${process.env.PUBLIC_URL + "/images/rain.jpg"})
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
  font-size: 1.3rem;
  font-family: "ChosunCentennial";
  /* text-shadow:
    0 0 30px #000,
    0 0 60px #b23d39,
    0 0 70px #b23d39; */
  animation: time 5s ease-in-out;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 72%;
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
    "공포영화에서만 볼 법한 것이 정말 선명하게 내 눈에 비춰졌다.`아무것도 없는 비오는 단칸방의 불을 껐을때 사람의 형체의 실루엣이 `내 눈앞에 선명하게 서있었고, 다시 불을 켜니 아무것도 없었다.`나는 이상한 느낌이 들었다. 이런 경우는 처음이였기에 어리둥절했다.`다시 불을 끄니 그 실루엣은 바닥에서 양반다리를 하고 앉아 있었고 `순간 두려워지는 나를 알 수 있었다.`이내 용기를 가지고 마주앉아 누구냐고 물었지만 대답이 없었다.`할 말이 없다면 내 집에서 나가달라고 했지만 아무런 미동도 없이 그 자리에 가만히 앉아 있었고`겪어보지 못한 사람이라면 미지의 공포감에 밖을 뛰쳐나갔어도 이상하지 않았을 상황에` 나는 그저 멍하니 있을 수 밖에 없었다. 이내 그 실루엣은 점점 나에게 다가와 말을 건넸고`그 말은 나에게 닥쳐있던 현실을 날려버릴 정도로 무서운 말이였다."
  },
];
const ChapterFive = () => {
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
          src={process.env.PUBLIC_URL + "/music/ChapterFive.mp3"}
          loop
        />
        <Link to="/chapterSix">
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

export default ChapterFive;
