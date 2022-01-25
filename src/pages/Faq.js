import React from 'react'
import ReactDOM  from 'react-dom'

function Faq() {
  return ReactDOM.createPortal(
     <h1>Frequently asked Questions: </h1>,
     document.getElementById("portal-Faq")
  )
}

export default Faq;


