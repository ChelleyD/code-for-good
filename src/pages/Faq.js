import React from 'react';
import reactDom from 'react-dom';
import SimpleAccordion from './Accordion';

const FAQ_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "50px",
    zIndex: "1000",
    height: "200px",
    width: "200px",
    background: "lightgrey",
    boxShadow: "24",


}

export default function Faq({onClose}) {
  return (
    <div>
      <div style={FAQ_STYLES}>
        <button onClick={onClose}>Close FAQ</button>

        <SimpleAccordion />
       
      </div>

      
    </div>

    
)
}


