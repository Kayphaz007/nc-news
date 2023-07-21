import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <div>
          <Link to={"coding"}>
            <p>coding</p>
          </Link>
          <Link to={"football"}>
            <p>football</p>
          </Link>
          <Link to={"cooking"}>
            <p>cooking</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
