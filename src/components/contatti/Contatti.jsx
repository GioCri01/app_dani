import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./Contatti.css";
// import img from '../contatti/fine.png'

const Contatti = ({}) => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("contatti-section");
      if (element && !animationStarted) {
        const rect = element.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < windowHeight) {
          setAnimationStarted(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [animationStarted]);

  useEffect(() => {
    if (animationStarted) {
      setTimeout(() => {
        setShowFirst(true);
      }, 700);
    }
  }, [animationStarted]);

  useEffect(() => {
    if (showFirst) {
      setTimeout(() => {
        setShowSecond(true);
      }, 500);
    }
  }, [showFirst]);

  const firstContainerProps = useSpring({
    opacity: showFirst ? 1 : 0,
  });

  const secondContainerProps = useSpring({
    opacity: showSecond ? 1 : 0,
  });

  return (
    <div id="contatti-section" className="Contatti">
     {/* <img src={img} alt="" /> */}
    </div>
  );
};

export default Contatti;
