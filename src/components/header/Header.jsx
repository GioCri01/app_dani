import React from "react";
import "./Header.css";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router";

const Header = ({onScrollToSection}) => {
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
      <div  className="logo" onClick={() => navigate("/")}>Orage</div>

      <nav>
        {onScrollToSection?
          <ul>
          <li onClick={() => onScrollToSection('home')}>Home</li>
          <li onClick={() => onScrollToSection('prodotti')}>Prodotti</li>
          <li onClick={() => onScrollToSection('chiSiamo')}>Chi Siamo</li>
        </ul>
        :
        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          
        </ul>
        }
      </nav>
    </div>
  );
};

export default Header;
