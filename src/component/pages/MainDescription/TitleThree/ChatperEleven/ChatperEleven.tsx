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
  background: url(${process.env.PUBLIC_URL + "/images/moon.jpeg"})
    no-repeat right center;
  background-size: cover;
  animation: time 8s ease-in-out;
  filter: brightness(0.3);

  @keyframes time {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    background-size: cover;
    background-position: center center;
  }

    @media (max-width: 480px) {
    background-size: cover;
    background-position: center center;
  }
`;

const ContentText = styled.p`
  width: 100%;
  height: 10%;
  color: #ffffffce;
  font-size: 1.2rem;
  font-family: "ChosunCentennial";
  text-shadow:
    0 0 30px #001,
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

  @media (max-width: 768px) {
    font-size: 2.5vw;
    left: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    text-align:left;

  }

  @media (max-width: 480px) {
    font-size: 2.5vw;
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
`;

const ChapterText = [
  {
    title:
   "그 후로 나는 굿을 하고 기도를 하며 산으로, 바다로, 사람들을 도와주고 또한 여러곳을 거쳤다.`그리고 느낀 것은 인생사 누구하나 쉬운 사람이 없고, 사연없는 사람이 없으며`인간은 고고하며 어리석고 그만큼 가치가 있다는 것을 알게 된다.`나조차도 같은 인간인 것을 깨닳아야 하며, 같으면서도 다르다는 것을 인정 해야했다.`그럼에도 쉽지 않은 것을 알게 되기도 한다.`가끔은 나도 평범한 삶을 살았다면 어땠을까?라는 생각을 하지만`이제는 그저 웃고 넘기는 그런 사람이 되었다.`무당이라는 말은 사실 직책이라고 한다. 지금으로 치면 청와대를 넘나들던 사람이라고 한다.`참 아이러니 할 수 없다. 그럼에도 탓을 받고 사는 인생이라니.참으로 아이러니 할 수 없다.`아직 갈 길이 멀다. 언젠가는 알게 되지 않을까. 왜 이렇게 사람들을 도와주며 살아가야 하는 삶이였는지.`'왜 나였는지.'`하지만 그것은 먼 훗날의 이야기이기에 지금만을 살아가려 한다."
  },
];
const ChatperEleven = () => {
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
          src={process.env.PUBLIC_URL + "/music/ChapterEleven.mp3"}
          loop
        />
        <Link to="/chapterIntroFifth">
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

export default ChatperEleven;
