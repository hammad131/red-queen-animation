import React, { useEffect, useRef } from "react";
import './Queen.css';

function Queen() {

    const alice = useRef(null);
    const background = useRef(null);
    const foreground = useRef(null);

    useEffect(() => {
    
    var spriteFrames = [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)' },   
      ];

 
      var aliceSpirit = alice.current.animate(
        spriteFrames, {
        easing: 'steps(7, end)',
        direction: "reverse",
        duration: 600,
        playbackRate: 1,
        iterations: Infinity
      });


    setInterval(function () {
        if (aliceSpirit.playbackRate > 0.4){
            aliceSpirit.playbackRate *= 0.9;
        };
        adjustAnimationPlayback();
    }, 3000);  


    var sceneryFrames =   [
        { transform: 'translateX(100%)' },
        { transform: 'translateX(-100%)' }   
    ];
      

    var sceneryTimingBackground = {
        duration: 36000,
        iterations: Infinity
    };
    
    var sceneryTimingForeground = {
        duration: 12000,
        iterations: Infinity
    };

    
    var backgroundMovement = background.current.animate(
        sceneryFrames, sceneryTimingBackground
        );
            
 
    var foregroundMovement = foreground.current.animate(
        sceneryFrames, sceneryTimingForeground
         );


    var sceneries = [foregroundMovement, backgroundMovement];

    var adjustAnimationPlayback = function() {
        if (aliceSpirit.playbackRate < .8) {
            sceneries.forEach(function(anim) {
                anim.playbackRate = (aliceSpirit.playbackRate/2) * -1;
            });

        } else if (aliceSpirit.playbackRate > 1.2) {
            sceneries.forEach(function(anim) {
            anim.playbackRate = aliceSpirit.playbackRate/2;
          });

        } else {
           sceneries.forEach(function(anim) {
            anim.playbackRate = 0;    
          });
        } ;  
    }
        
    adjustAnimationPlayback();
        


    var goFaster = ()=> {
        aliceSpirit.playbackRate *= 1.1;
        adjustAnimationPlayback();
    };
          
    document.addEventListener("click", goFaster);

  });

  return (
<div className="wrapper">
      <div className="sky"></div>
      <div className="earth">
        <div className="alice">
          <img
            className="alicesprite"
            ref={alice}
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
            alt="Red Queen Animation"
          />
        </div>
      </div>

      <div className="animation" id="foreground" ref={foreground}>
        <img
          id="treefore"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
          alt="foreground view "
        />
      </div>

      <div className="animation background1" ref={background}>
        <img
          className="pawn"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
          alt="red pawn 1 "
        />
        <img
          className="pawn2"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
          alt="red pawn 2 "
        />
        <img
          className="treeback"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
          alt="tree"
        />
      </div>
    </div>
  );
}

export default Queen;