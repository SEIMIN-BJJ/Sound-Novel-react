import { Routes, Route, useLocation } from "react-router-dom";
import Intro from "../component/pages/IntroDescription/Intro/Intro";
import IntroSecond from "../component/pages/IntroDescription/IntroSecond/IntroSecond";
import FirstDescription from "../component/pages/IntroDescription/FirstDescription/FirstDescription";
import SecondDescription from "../component/pages/IntroDescription/SecondDescription/SecondDescription";
import ThirdDescription from "component/pages/IntroDescription/ThirdDescription/ThirdDescription";
import ChapterIntroFirst from "component/pages/MainDescription/TitleOne/ChapterIntroFirst/ChapterIntroFirst";
import ChapterOne from "component/pages/MainDescription/TitleOne/ChapterOne/ChapterOne";
import ChapterTwo from "component/pages/MainDescription/TitleOne/ChapterTwo/ChapterTwo";
import ChapterIntroSecond from 'component/pages/MainDescription/TitleTwo/ChapterIntroSecond/ChapterIntroSecond';
import ChapterThree from "component/pages/MainDescription/TitleTwo/ChapterThree/ChapterThree";
import ChapterIntroThird from "component/pages/MainDescription/TitleThree/ChapterIntroThird/ChapterIntroThird";
import ChapterFour from "component/pages/MainDescription/TitleThree/ChapterFour/ChapterFour";
import ChapterFive from '../component/pages/MainDescription/TitleThree/ChapterFive/ChapterFive';
const StoryRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Intro />}></Route>
      <Route path="/introsecond" element={<IntroSecond />}></Route>
      <Route path="/firstdescription" element={<FirstDescription />}></Route>
      <Route path="/seconddescription" element={<SecondDescription />}></Route>
      <Route path="/thirddescription" element={<ThirdDescription />}></Route>
      <Route path="/chapterintroFirst" element={<ChapterIntroFirst />}></Route>
      <Route path="/chapterone" element={<ChapterOne />}></Route>
      <Route path="/chaptertwo" element={<ChapterTwo />}></Route>
      <Route path="/chapterIntroSecond" element={<ChapterIntroSecond />}></Route>
      <Route path="/chapterThree" element={<ChapterThree />}></Route>
      <Route path="/chapterIntroThird" element={<ChapterIntroThird />}></Route>
      <Route path="/chapterFour" element={<ChapterFour />}></Route>
      <Route path="/chapterFive" element={<ChapterFive />}></Route>
    </Routes>
  );
};

export default StoryRoutes;
