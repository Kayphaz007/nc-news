import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./components/Articles";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
    </Routes>
  );
}

export default App;

// article_id
// :
// 34
// article_img_url
// :
// "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700"
// author
// :
// "grumpy19"
// comment_count
// :
// 11
// created_at
// :
// "2020-11-22T11:13:00.000Z"
// title
// :
// "The Notorious MSG’s Unlikely Formula For Success"
// topic
// :
// "cooking"
// votes
// :
// 0
