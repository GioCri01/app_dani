import React, { useEffect, useRef, useState } from "react";
import "./Section.css";
import { useScroll, animated, useSpring } from "@react-spring/web";
import media_mount from "./orage_mount.mp4";
import media_loop from "./orage_loop.mp4";
import { Player } from "video-react";
import ReactPlayer from "react-player";
// import video from '../../assets/video/orage.loop.mp4'

const Section = ({}) => {
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

  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1},
      config: { duration: 2500 },
    }),
    []
  );

 

 

  return (
    <div className="Section">
        
          <ReactPlayer
          
            ref={playerRef}
            url={media_loop}
            width="100%"
            height="auto"
            muted={true}
            loop={true}
            playing={true} 
            controls={false} 
            onEnded={() => {
              console.log("fine");
            }}
          />
       
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
