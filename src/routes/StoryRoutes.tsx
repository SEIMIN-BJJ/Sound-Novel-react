import { Routes, Route, useLocation } from "react-router-dom";
import Intro from "../component/pages/Intro/Intro";
import IntroSecond from "../component/pages/Intro/IntroSecond";
import FirstDescription from "../component/pages/Intro/FirstDescription";
import SecondDescription from "../component/pages/Intro/SecondDescription";
import ThirdDescription from "component/pages/Intro/ThirdDescription";
import ChapterIntro from "component/pages/Main/ChapterIntro";
import ChapterOne from "component/pages/Main/ChapterOne";

function StoryRoutes() {
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
    </Routes>
  );
}

export default StoryRoutes;
