import React from 'react';
import reactDom from 'react-dom';

const FAQ_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    Transform: "translate(-50%, -50%)",
    padding: "50px",
    zindex: 1000


}

export default function Faq({ open, children, onClose}) {
    if (!open) return null

  return reactDom.createPortal(
  
  <>
    <div style={FAQ_STYLES}>
      <button onClick={onClose}>Close FAQ</button>
      {children}

    </div>


  </>
  document.getElementById("portal")
)
}


