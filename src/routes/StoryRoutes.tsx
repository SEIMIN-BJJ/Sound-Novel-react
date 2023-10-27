import { Routes, Route, useLocation } from "react-router-dom";
import Intro from "../component/pages/Intro/Intro";

function StoryRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Intro />}></Route>
    </Routes>
  );
}

export default StoryRoutes;
