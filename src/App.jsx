import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleArticle from "./pages/SingleArticle";
import Articles from "./components/Articles";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<Articles />} />
            <Route path="coding" element={<Articles topic={"coding"} />} />
            <Route path="football" element={<Articles topic={"football"} />} />
            <Route path="cooking" element={<Articles topic={"cooking"} />} />
          </Route>
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
