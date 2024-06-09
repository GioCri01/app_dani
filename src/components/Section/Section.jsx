import React, { useEffect, useRef, useState } from "react";
import "./Section.css";
import { useScroll, animated, useSpring } from "@react-spring/web";

import imgLoopOrage from "../../assets/img/orage_loop.gif";
// import video from '../../assets/video/orage.loop.mp4'

const Section = ({ scrollTrigger }) => {
  const ref = useRef();
  const [changeMedia, setChangeMedia] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    // Quando il componente viene montato, facciamo partire il video in loop
    const startLoop = setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.seekTo(0);
        const internalPlayer = playerRef.current.getInternalPlayer();
        if (internalPlayer) {
          internalPlayer.loop = true;
          internalPlayer.muted = true;
          internalPlayer.play();
        }
      }
    }, 100);

    return () => clearTimeout(startLoop);
  }, []);

  useEffect(() => {
    if (scrollTrigger === "home") {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollTrigger])
  

  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 2500 },
    }),
    []
  );

  return (
    <div ref={ref} className="Section">
      <img className="bg-main" src={imgLoopOrage} alt="" />
      <animated.div
        // className="transitionDiv"
        style={props}
        // onClick={handleClick}
      >
        <div className="overlay">Orage</div>
      </animated.div>
    </div>
  );
};

export default Section;
