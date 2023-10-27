import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TypeIt from "typeit-react";
import { Howl, Howler } from "howler";
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
  width: 100%;
  margin-bottom: 10vw;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const ContentText = styled.p`
  width: 100%;
  height: 10%;
  color: #ffffffce;
  font-size: 2rem;
  font-family: "ChosunCentennial";
  text-shadow:
    0 0 4px #000,
    0 0 11px #000,
    0 0 19px #000,
    0 0 90px #b23d39,
    0 0 80px #b23d39,
    0 0 90px #b23d39,
    0 0 100px #b23d39,
    0 0 150px #b23d39,
    0 0 190px #b23d39,
    0 0 250px #b23d39;
  animation: time 5s ease-in-out;
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

const FirstDescription = () => {
  useEffect(() => {
    const sound = new Howl({
      src: ["/public/music/FirstDescription.mp3"],
      autoplay: true,
      loop: true,
      format: "mp3",
    });

    return () => {
      sound.stop();
    };
  }, []);

  return (
    <Container>
      <Content>
        <Link to="/introsecond">
          <ContentText>
            <TypeIt
              options={{ loop: false, speed: 50 }}
              getBeforeInit={(instance) => {
                instance
                  .pause(750)
                  .type(
                    "나는 무속인이다.<br /><br />그리고 나는 보이지 않아야 할 것들이 보인다.<br /><br />그리고<br /><br />느껴진다."
                  )
                  .pause(750);
                return instance;
              }}
            />
          </ContentText>
        </Link>
      </Content>
    </Container>
  );
};
export default FirstDescription;
