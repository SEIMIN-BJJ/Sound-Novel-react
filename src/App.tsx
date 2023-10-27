import { BrowserRouter } from "react-router-dom";
import StoryRoutes from "./routes/StoryRoutes";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <StoryRoutes />
    </BrowserRouter>
  );
};

export default App;
