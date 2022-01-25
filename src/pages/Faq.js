import React from "react";
import ReactDom from "react-dom";

// function Faq () {
//     return <h1>Faq Page</h1>
// }

const Faq = (props) => {
    console.log(props)
    return ReactDOM.createPortal(
        <div>
            {/* <h1>Frequently asked Questions</h1> */}
            <h2>{props.name}</h2>
            
            console.log.getElementById("Faq-portal")
        </div>
    )

}

export default Faq;

