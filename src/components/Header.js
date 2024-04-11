import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnReact, setBtnReact] = useState("LOGIN");
  // console.log(btnReact);
  return (
    <div className="header">
      <div className="logo">
        <img className="image" src={LOGO_URL} />
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            {/* <a href="/contactus">Contact Us </a> */}
            <Link to={"/contactus"}>Contact Us</Link>
          </li>
          <li>Cart Items</li>
          <button
            className="login"
            onClick={() => {
              btnReact === "LOGIN"
                ? setBtnReact("LOGOUT")
                : setBtnReact("LOGIN");
            }}
          >
            {btnReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
