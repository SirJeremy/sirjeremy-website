import { useEffect, useState } from 'react';
import { Carousel } from 'flowbite-react';

import useElementSize from 'src/hooks/useElementSize';

import mainMenu from "src/assets/ht/main-menu.png";
import boostRamp from "src/assets/ht/boost-ramp.png";
import crew from "src/assets/ht/crew.png";
import combat1 from "src/assets/ht/combat-1.png";
import combat2 from "src/assets/ht/combat-2.png";
import lavaLevel from "src/assets/ht/lava-level.png";
import sandLevel from "src/assets/ht/sand-level.png";
import endGame from "src/assets/ht/end-game.png";


// See comment on useElementSize
const widthToHeightRatio = 0.56181818;

function HavokTanksCarousel() {
  const [imgRef, {width: imgWidth, height: imgHeight}] = useElementSize();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    //console.log(imgWidth, imgHeight)
    setHeight(imgWidth * widthToHeightRatio);
  }, [imgWidth]);

  return (
    <div className='not-prose md-img-right' style={{height: `${height}px`}}>
      <Carousel slideInterval={7500} pauseOnHover>
        <img src={mainMenu} alt="..." ref={imgRef}/>
        <img src={boostRamp} alt="..."/>
        <img src={crew} alt="..."/>
        <img src={combat1} alt="..."/>
        <img src={lavaLevel} alt="..."/>
        <img src={combat2} alt="..."/>
        <img src={sandLevel} alt="..."/>
        <img src={endGame} alt="..."/>
      </Carousel>
    </div>
  )
}

export default HavokTanksCarousel;
