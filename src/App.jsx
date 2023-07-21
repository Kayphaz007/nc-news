import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleArticle from "./pages/SingleArticle";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <Link to={"/"}>Home</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
