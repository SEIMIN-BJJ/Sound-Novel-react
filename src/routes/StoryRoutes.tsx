import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Intro from "../component/pages/IntroPage/Intro";
import IntroSecond from "../component/pages/IntroPage/IntroSecond";
import FirstDescription from "../component/pages/IntroDescription/FirstDescription";
import SecondDescription from "../component/pages/IntroDescription/SecondDescription";
import ThirdDescription from "../component/pages/IntroDescription/ThirdDescription";
import ChapterIntroFirst from "../component/pages/ChapterDescription/ChapterIntroFirst";
import ChapterOne from "../component/pages/MainPage/ChapterOne";
import ChapterTwo from "../component/pages/MainPage/ChapterTwo";
import ChapterIntroSecond from "../component/pages/ChapterDescription/ChapterIntroSecond";
import ChapterThree from "../component/pages/MainPage/ChapterThree";
import ChapterFour from "../component/pages/MainPage/ChapterFour";
import ChapterFive from "../component/pages/MainPage/ChapterFive";
import ChapterSix from "../component/pages/MainPage/ChapterSix";
import ChapterSeven from "../component/pages/MainPage/ChapterSeven";
import ChapterIntroThird from "../component/pages/ChapterDescription/ChapterIntroThird";
import ChapterEight from "../component/pages/MainPage/ChapterEight";
import ChapterNine from "../component/pages/MainPage/ChapterNine";
import ChapterIntroFourth from "../component/pages/ChapterDescription/ChapterIntroFourth";
import ChapterTen from "../component/pages/MainPage/ChapterTen";
import ChatperEleven from "../component/pages/MainPage/ChatperEleven";
import ChapterIntroFifth from "../component/pages/ChapterDescription/ChapterIntroFifth";

const variants = {
  enter: {
    opacity: 0,
    x: "100%",
  },
  center: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: "-100%",
  },
};

const StoryRoutes = () => {
  const location = useLocation();

  return (
      <AnimatePresence exitBeforeEnter={false}>
        <motion.div
          key={location.pathname}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          style={{ position: "absolute", width: "100%" }}
        >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Intro />} />
          <Route path="/introsecond" element={<IntroSecond />} />
          <Route path="/firstdescription" element={<FirstDescription />} />
          <Route path="/seconddescription" element={<SecondDescription />} />
          <Route path="/thirddescription" element={<ThirdDescription />} />
          <Route path="/chapterintroFirst" element={<ChapterIntroFirst />} />
          <Route path="/chapterone" element={<ChapterOne />} />
          <Route path="/chaptertwo" element={<ChapterTwo />} />
          <Route path="/chapterIntroSecond" element={<ChapterIntroSecond />} />
          <Route path="/chapterThree" element={<ChapterThree />} />
          <Route path="/chapterFour" element={<ChapterFour />} />
          <Route path="/chapterFive" element={<ChapterFive />} />
          <Route path="/chapterSix" element={<ChapterSix />} />
          <Route path="/chapterSeven" element={<ChapterSeven />} />
          <Route path="/chapterIntroThird" element={<ChapterIntroThird />} />
          <Route path="/chapterEight" element={<ChapterEight />} />
          <Route path="/chapterNine" element={<ChapterNine />} />
          <Route path="/chapterIntroFourth" element={<ChapterIntroFourth />}/>
          <Route path="/chapterTen" element={<ChapterTen />} />
          <Route path="/chatperEleven" element={<ChatperEleven />} />
          <Route path="/chapterIntroFifth" element={<ChapterIntroFifth />}/>
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default StoryRoutes;
