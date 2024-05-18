import React from "react";
import "./Header.css";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );
  return (
    <div className="Header">
      <div className="logo" onClick={() => navigate("/")}>Orage</div>

      <nav>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/detail")}>Prodotti</li>
          {/* <li>Contatti</li>
          <li>Supporto</li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
