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
  background: url(${process.env.PUBLIC_URL + "/images/room.jpg"})
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
  font-size: 1.3rem;
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
    "그것을 본 이후 나의 인생은 이상한 방향으로 흘러 가기 시작했다는 생각이 들었다.`나한테만 참 야박하다 생각이 들 정도로 인생이 꼬일대로 꼬이기 시작했다.`내가 뭘 잘 못했나? 라는 생각이 점점 정말 내 문제인건가? 라는 생각으로 바뀌어 가기 시작했다.`장례식 이후 무려 20여년을 귀신 장난에 놀아났고 목숨이 위태로울 뻔 한적도 많았지만 `그 중에 정말 섬뜩 했을 때가 있었다.`나는 일도 사람도 그 어떤 무엇도 전부 부정 당하던 시기였다. 아니, 당하는 시기였다.`나는 무엇을 잘못한걸까. 인생이 참 덧없다 생각했을때. 그 순간 무엇인가가 내 등을 '탁탁' 쳤다.`“뭐지?”`그러나 나는 이런일을 겪는 것이 한두번이 아니였기에`“아..또 시작이구나..”라고 생각했지만 그 날은 어떠한 것도 받아들일 수가 없었다.`“나 좀 그냥 제발 좀 둬라!”`나는 소리를 쳤고 그것이 잘못되었다."
  },
];
const ChapterFour = () => {
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
          src={process.env.PUBLIC_URL + "/music/ChapterFour.mp3"}
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

export default ChapterFour;
