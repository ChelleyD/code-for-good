import { useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import FrontDisplay from "./FrontDisplay";
import BackDisplay from "./BackDisplay";
import React, {useState} from "react";

function FlipCard({ frontImage, backImage, description, description2 }) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  console.log(hovered);
  return (
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
      style={{ width: "400px", height: "560px", padding: "0"}} /// these are optional style, it is not necessary
    >
      <FrontSide
        onClick={() => {
          ref.current.toggle();
              
        }}
        style={{ width: "400px", height: "560px", padding: "0"}}

      >
        <FrontDisplay frontImage={frontImage} description={description}  hovered = {hovered}/>
      </FrontSide>
      <BackSide
        onClick={() => {
          ref.current.toggle();
        }}
        style={{ width: "400px", height: "560px", padding: "0"}}
      >
        <BackDisplay backImage={backImage} description2={description2} hovered = {hovered}/>
      </BackSide>
    </Flippy>
  );
}
export default FlipCard;