import React from 'react';
import reactDom from 'react-dom';

const MODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    Transform: "translate(-50%, -50%)",
    padding: "50px",
    zindex: 1000


}

export default function Modal({ open, children, onClose}) {
    if (!open) return null

  return reactDom.createPortal(
  
  <>
    <div style={MODAL_STYLES}>
      <button onClick={onClose}>Close Modal</button>
      {children}

    </div>


  </>
  document.getElementById("portal")
)
}

