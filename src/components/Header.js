import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnname, setBtnname] = useState("Login");
  useEffect(() => {
    console.log("useEffect called");
  }, [btnname]);
  console.log("Header called");

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="Navitems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cobtact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnname === "Login" ? setBtnname("Logout") : setBtnname("Login");
            }}
          >
            {btnname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
