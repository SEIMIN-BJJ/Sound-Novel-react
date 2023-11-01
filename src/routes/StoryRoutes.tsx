import { Routes, Route, useLocation } from "react-router-dom";
import Intro from "../component/pages/IntroDescription/Intro/Intro";
import IntroSecond from "../component/pages/IntroDescription/IntroSecond/IntroSecond";
import FirstDescription from "../component/pages/IntroDescription/FirstDescription/FirstDescription";
import SecondDescription from "../component/pages/IntroDescription/SecondDescription/SecondDescription";
import ThirdDescription from "component/pages/IntroDescription/ThirdDescription/ThirdDescription";
import ChapterIntro from "component/pages/MainDescription/ChapterIntro/ChapterIntro";
import ChapterOne from "component/pages/MainDescription/ChapterOne/ChapterOne";
import ChapterTwo from "component/pages/MainDescription/ChapterTwo/ChapterTwo";
import ChapterThree from "component/pages/MainDescription/ChapterThree/ChapterThree";

const StoryRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Intro />}></Route>
      <Route path="/introsecond" element={<IntroSecond />}></Route>
      <Route path="/firstdescription" element={<FirstDescription />}></Route>
      <Route path="/seconddescription" element={<SecondDescription />}></Route>
      <Route path="/thirddescription" element={<ThirdDescription />}></Route>
      <Route path="/chapterintro" element={<ChapterIntro />}></Route>
      <Route path="/chapterone" element={<ChapterOne />}></Route>
      <Route path="/chaptertwo" element={<ChapterTwo />}></Route>
      <Route path="/chapterthree" element={<ChapterThree />}></Route>
    </Routes>
  );
};

export default StoryRoutes;
