import { useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import FrontDisplay from "./FrontDisplay";
import BackDisplay from "./BackDisplay";

function FlipCard({ frontImage, backImage, description, description2 }) {
  const ref = useRef();
  return (
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: "380px", height: "380px" }} /// these are optional style, it is not necessary
    >
      <FrontSide
        onClick={() => {
          ref.current.toggle();
        }}
      >
        <FrontDisplay frontImage={frontImage} description={description} />
      </FrontSide>
      <BackSide
        onClick={() => {
          ref.current.toggle();
        }}
        style={{ backgroundColor: "#175852", }}
      >
        <BackDisplay backImage={backImage} description={description2} />
      </BackSide>
    </Flippy>
  );
}
export default FlipCard;
