import { useEffect, useState } from 'react';
import { Carousel } from 'flowbite-react';

import useElementSize from 'src/hooks/useElementSize';

import mainMenu from "src/assets/ht/main-menu.png";
import levelSelect from "src/assets/ht/level-select.png";
import boostRamp from "src/assets/ht/boost-ramp.png";
import crew from "src/assets/ht/crew.png";
import combat1 from "src/assets/ht/combat-1.png";
import combat2 from "src/assets/ht/combat-2.png";
import lavaLevel from "src/assets/ht/lava-level.png";
import sandLevel from "src/assets/ht/sand-level.png";
import endGame from "src/assets/ht/end-game.png";


// See comment on useElementSize
const widthToHeightRatio = 0.56181818;

function HavokTanksCarousel({className=''}) {
  const [imgRef, {width: imgWidth, height: imgHeight}] = useElementSize();
  const [height, setHeight] = useState(0);

  console.log(className);
  useEffect(() => {
    //console.log(imgWidth, imgHeight)
    setHeight(imgWidth * widthToHeightRatio);
  }, [imgWidth]);

  // TODO: Add alt text
  return (
    <div className={className + ' not-prose'} style={{height: `${height}px`}}>
      <Carousel slideInterval={7500} pauseOnHover>
        <img src={mainMenu} alt='Screenshot of main menu screen of the game "Havoc Tanks". The background is a hangar containing blue tanks.' ref={imgRef}/>
        <img src={levelSelect} alt="Screenshot of characater select screen located in a hangar, where orange team is selecting their tank type."/>
        <img src={boostRamp} alt="Screenshot of game with Havoc Tanks launching off boost ramps."/>
        <img src={crew} alt="Screenshot of game of Crew drones exchanging fire."/>
        <img src={combat1} alt="Screenshot of game with two Havoc Tanks engaged in combat. The oragne tank had just been hit and recoiling from the impact."/>
        <img src={lavaLevel} alt="Screenshot of game with the blue side launching an assault on a gate, and the orange side manuvaring over lava."/>
        <img src={combat2} alt="Screenshot of game with two Havoc Tanks engaged in combat located in the orange base near the core."/>
        <img src={sandLevel} alt="Screenshot of game with two Havoc Tanks submiting a sandy hill."/>
        <img src={endGame} alt="Screenshot of game during game over screen. It shows that the blue side won and the orange side lost."/>
      </Carousel>
    </div>
  )
}

export default HavokTanksCarousel;
