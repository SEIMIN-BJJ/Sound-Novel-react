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
import ChapterFour from "component/pages/MainDescription/TitleTwo/ChapterFour/ChapterFour";
import ChapterFive from '../component/pages/MainDescription/TitleTwo/ChapterFive/ChapterFive';
import ChapterSix from "component/pages/MainDescription/TitleTwo/ChapterSix/ChapterSix";
import ChapterSeven from '../component/pages/MainDescription/TitleTwo/ChapterSeven/ChapterSeven';
import ChapterIntroThird from "component/pages/MainDescription/TitleThree/ChapterIntroThird/ChapterIntroThird";
import ChapterEight from '../component/pages/MainDescription/TitleThree/ChapterEight/ChapterEight';
import ChapterNine from '../component/pages/MainDescription/TitleThree/ChapterNine/ChapterNine';
import ChapterIntroFourth from "component/pages/MainDescription/TitleThree/ChapterIntroFourth/ChapterIntroFourth";
import ChapterTen from '../component/pages/MainDescription/TitleThree/ChapterTen/ChapterTen';
import ChatperEleven from "component/pages/MainDescription/TitleThree/ChatperEleven/ChatperEleven";
import ChapterIntroFifth from "component/pages/MainDescription/TitleThree/ChapterIntroFifth/ChapterIntroFifth";

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
      <Route path="/chapterFour" element={<ChapterFour />}></Route>
      <Route path="/chapterFive" element={<ChapterFive />}></Route>
      <Route path="/chapterSix" element={<ChapterSix />}></Route>
      <Route path="/chapterSeven" element={<ChapterSeven />}></Route>
      <Route path="/chapterIntroThird" element={<ChapterIntroThird />}></Route>
      <Route path="/chapterEight" element={<ChapterEight />}></Route>
      <Route path="/chapterNine" element={<ChapterNine />}></Route>
      <Route path="/chapterIntroFourth" element={<ChapterIntroFourth />}></Route>
      <Route path="/chapterTen" element={<ChapterTen />}></Route>
      <Route path="/chatperEleven" element={<ChatperEleven />}></Route>
      <Route path="/chapterIntroFifth" element={<ChapterIntroFifth />}></Route>
    </Routes>
  );
};

export default StoryRoutes;
