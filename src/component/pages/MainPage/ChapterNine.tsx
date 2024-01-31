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
  color: #b2b2b2;
  font-size: 1.5rem;
  font-family: "ChosunCentennial";
  /* text-shadow:
    0 0 30px #000,
    0 0 60px #b23d39,
    0 0 70px #b23d39; */
  animation: time 5s ease-in-out;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 74%;
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
    font-size: 1.3rem;
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
    "그 후로 힘든 나날을 보내오다 어떤 한 사람을 만나게 된다.`길을 걷다 그 사람은 나에게 다가와 아무 말 없이 내 손을 꼭 붙잡았다.` 걱정말라는 얘기를 했다. 나는 생전 처음 보는 사람이 붙잡은 손을 뿌리칠 수도,` 대꾸도 할 수 없었다. 그저 눈물만 흘렀다.`그 후 그 사람의 손에 이끌려 선생님이라는 사람을 만나게 된다.`그 분은 모든 것을 내려놓은 나의 모습을 보고 놀라시며`이런 상태로 어떻게 버티고 살았냐며, 어찌 버티고 살았냐며 불쌍하다 우셨다.`죽어도 열두번은 더 죽을텐데 어떻게 버티고 있었냐며, 가슴이 찢어진다며 우셨다.`처음으로 들었다. '너는 미치지 않았다고.' 우리네들은 그것을 안다.라고.`그러니 걱정 하지말고 내 어떻게든 도와주겠다 라고 하셨다.`다시 한번 나는 눈물을 뚝뚝 흘렸다."

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
        <Link to="/chapterIntroFourth">
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
