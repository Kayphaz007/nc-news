import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleArticle from "./pages/SingleArticle";
import Articles from "./components/Articles";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Articles />} />
          <Route path="coding" element={<Articles topic={coding} />} />
          <Route path="football" element={<Articles topic={football} />} />
          <Route path="cooking" element={<Articles topic={cooking} />} />
        </Route>
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
