import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
  const [loginButton, setLoginButton] = useState("Login");
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const { restaurantList, restaurantListCopy, updateRestaurantList } =
    useRestaurantList();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items"></div>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
        <li>Cart</li>
        <button
          className="login-btn"
          onClick={() => {
            loginButton === "Login"
              ? setLoginButton("Logout")
              : setLoginButton("Login");
          }}
        >
          {loginButton} {onlineStatus ? "✅" : "🔴"}
        </button>
      </ul>
    </div>
  );
};

export default HeaderComponent;
