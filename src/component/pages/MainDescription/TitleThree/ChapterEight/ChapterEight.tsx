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
  background: url(${process.env.PUBLIC_URL + "/images/run-1.jpg"})
    no-repeat right center;
  background-size: cover;
  animation: time 10s ease-in-out;
  filter: brightness(0.3);

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
  font-size: 0.8rem;
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
  left: 73%;
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

const ChapterText = [
  {
    title:
    "```난 여지껏 보이면 안되는 존재들을 봐왔음에도 믿지 않았다.`내가 미쳐서 그런거다. 내가 심신이 힘들어서 그런거다.`이건 다 환상이다 라고.``안보인다. 안보인다. 잘못 보는거다. 이건 다 환상이다.``그런식으로 부정을 해왔다. 그러다가 어느 순간 정말 보이지 않게 되었다.``어느 곳을 가도 어디를 봐도 보이지 않았다.`좋아해야 할 순간에 나는 감정을 잃어버린 사람처럼 그저 멍하니 왜?라는 물음이 생겨났고 ``이렇게 계속 안보인다고 생각을 해야 없어지는거였나?`그러면 여지까지 겪어왔던 것들은 뭐지?라는 생각이 들었다. `정말 엄청난 허무함이 밀려왔었다.``진즉에 이렇게 할 걸. 다행으로 생각하자.`이제부터라도 다른사람들처럼 평범하게 지내면 된다. 라고.``하지만 그건 착각이였고``이제는 몸으로 더 느끼기 시작했고 산 사람들의 마음을 알게 되었고``저사람이 무슨 생각을 하는지 무슨일이 있었는지 알기 시작했다.`내가 원해서 알게 되는 것이 아닌 강제로 머리에 박아넣는 느낌이였다.``더 한것이 왔구나 싶었다."
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
          src={process.env.PUBLIC_URL + "/music/ChapterSeven.mp3"}
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

export default ChapterEight;
