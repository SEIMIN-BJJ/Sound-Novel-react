import { Routes, Route, useLocation } from "react-router-dom";
import Intro from "../component/pages/Intro/Intro";
import IntroSecond from "../component/pages/Intro/IntroSecond";
import FirstDescription from "../component/pages/Intro/FirstDescription";
import SecondDescription from "../component/pages/Intro/SecondDescription";
import ThirdDescription from "component/pages/Intro/ThirdDescription";

function StoryRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Intro />}></Route>
      <Route path="/introsecond" element={<IntroSecond />}></Route>
      <Route path="/firstdescription" element={<FirstDescription />}></Route>
      <Route path="/seconddescription" element={<SecondDescription />}></Route>
      <Route path="/thirddescription" element={<ThirdDescription />}></Route>
    </Routes>
  );
}

export default StoryRoutes;
