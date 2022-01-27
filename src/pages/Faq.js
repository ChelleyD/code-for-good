import React from 'react';
import reactDom from 'react-dom';
import SimpleAccordion from './Accordion';
import CloseIcon from '@mui/icons-material/Close';

const FAQ_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "50px",
    zIndex: "1000",
    height: "60%",
    width: "70%",
    background: "lightgrey",
    boxShadow: "24",


}

export default function Faq({onClose}) {
  return (
  
      <div style={FAQ_STYLES}>
        <CloseIcon onClick={onClose} style={{cursor:"pointer", top: "10px", right:"10px", position:'absolute'}} fontSize="medium"/>
      
        <SimpleAccordion />
       
      </div>

      
  

    
)
}


