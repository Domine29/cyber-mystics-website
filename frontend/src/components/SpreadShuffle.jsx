import React from "react";
import { Animate } from "react-animate-css";

export default function SpreadShuffle() {
  return (
    <>
      <Animate
        animationIn="bounceIn"
        animationOut="bounceOut"
        durationOut={1000}
        isVisible={true}
      >
        <div className="cards-container">
          
        </div>
      </Animate>
    </>
  );
}
