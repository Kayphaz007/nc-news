import Header from "../components/Header";
import Articles from "../components/Articles";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Home;
