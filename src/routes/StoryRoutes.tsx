import { Routes, Route, useLocation } from "react-router-dom";
import Intro from "../component/pages/Intro/Intro";
import IntroSecond from "../component/pages/IntroSecond/IntroSecond";
import FirstDescription from "../component/pages/FirstDescription/FirstDescription";

function StoryRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Intro />}></Route>
      <Route path="/introsecond" element={<IntroSecond />}></Route>
      <Route path="/firstdescription" element={<FirstDescription />}></Route>
    </Routes>
  );
}

export default StoryRoutes;
