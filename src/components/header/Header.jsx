import React, { useEffect } from "react";
import "./Header.css";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router";

const Header = ({ onScrollToSection,selectRef }) => {
  const navigate = useNavigate();
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );

  useEffect(() => {
    if (selectRef === 'home') {
      onScrollToSection('')
    }
  }, [selectRef])
  
  return (
    <div className="Header">
      <div
        className="logo"
        onClick={() =>
          onScrollToSection ? onScrollToSection("home") : navigate("/")
        }
      >
        Orage
      </div>

      <nav>
        {onScrollToSection ? (
          <ul>
            <li onClick={() => onScrollToSection("prodotti")}>Prodotti</li>
            <li onClick={() => onScrollToSection("chiSiamo")}>Contatti</li>
          </ul>
        ) : (
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Header;
