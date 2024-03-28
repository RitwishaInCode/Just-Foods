import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnReact, setBtnReact] = useState("LOGIN");
  console.log(btnReact);
  return (
    <div className="header">
      <div className="logo">
        <img className="image" src={LOGO_URL} />
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
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
