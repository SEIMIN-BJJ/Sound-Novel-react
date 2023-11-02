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
  background-size: contain;
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
    "그 말을 듣자마자 닫혀있던 모든 오감에 소름이 돋으면서 달려나갔다.`나는 패닉에 빠져 달리고 또 달렸다.어디로 가는지도 모르고 사람들을 밀치며 달리고 또 달렸다.`“가자”`그 한마디가 너무 무서웠다. 여태껏 겪어봤던 것들 중 가장 두려웠던 순간이었다.`그것은 뭔가가 다른 존재였다. 그게 무엇인지는 몰라도 확실히 다른 존재였다.`그리고 나는 정신없이 달리던 와중 어마어마하게 큰 나무앞에 다달았고 멍하니 서 있었다.`나는 내 모습에 무서움과 허탈함을 동시에 느꼈다.`그리곤 한없이 울었다.울고 또 울었다. 왜 이런일만 겪는 건지.`그것들의 장난 인건지. 아니면 내가 정말로 미친건지.`서럽고 서러워서 누구에게도 말하지 못하고 `그저 혼자 감내해야 한다는게 너무 힘들었고 다 포기하고 싶었다.``그렇게 또 한번 무너져 내렸다."
  },
];
const ChapterSeven = () => {
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

export default ChapterSeven;
