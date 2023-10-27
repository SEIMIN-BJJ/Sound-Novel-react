import { Routes, Route, useLocation } from "react-router-dom";
import Intro from "../component/pages/Intro/Intro";
import IntroSecond from "../component/pages/IntroSecond/IntroSecond";

function StoryRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Intro />}></Route>
      <Route path="/introsecond" element={<IntroSecond />}></Route>
    </Routes>
  );
}

export default StoryRoutes;
