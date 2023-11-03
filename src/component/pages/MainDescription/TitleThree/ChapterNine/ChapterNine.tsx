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
  background: url(${process.env.PUBLIC_URL + "/images/shaman-nine.png"})
    no-repeat right center;
  background-size: cover;
  animation: time 10s ease-in-out;
  filter: brightness(0.2);

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
    "그 후로 힘든 나날을 보내오다 어떤 한 사람을 만나게 된다.`길을 걷다 그 사람은 나를 보더니 다가와 아무 말 없이 내 손을 꼭 붙잡았다. 걱정말라는 얘기를 했다.`그러나 나는 생전 처음 보는 사람이 붙잡은 손도 대꾸도 할 수 없었다. 그저 눈물만 흘렀다.`그 후 그 사람의 손에 이끌려 선생님이라는 사람을 만나게 된다.`선생님이라는 분을 만났고 그 분을 처음 본 느낌은 생전 처음 겪어보는 느낌이 들었다.`대체 이게 뭔지 아리송 했다.`그 선생님은 나를 보자마자 이런 상태로 어떻게 버티고 살았냐며`어찌 버티고 살았냐며 불쌍하다 우셨다.` 나는 그 말을 듣자마자 눈물을 뚝뚝 흘렸다.`처음으로 들었다.`너는 미치지 않았다.`그 존재들은 너를 괴롭히려 한 것이 아닌 보호하고 있었던 것이다.`우리네들은 그것을 안다.`그러니 걱정하지말고 내 어떻게든 도와주겠다 라고 하셨다.`다시 한번 나는 눈물을 뚝뚝 흘렸다."

  },
];
const ChapterNine = () => {
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
          src={process.env.PUBLIC_URL + "/music/ChapterNine.mp3"}
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

export default ChapterNine;
