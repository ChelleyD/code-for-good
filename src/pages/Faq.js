import React from "react"
import Faq-prompt from './pages/Faq-prompt';
// function Faq () {
//     return <h1>Faq Page</h1>
// }

const Faq = (props) => {
    console.log(props)
    return (
        <div>
            {/* <h1>Frequently asked Questions</h1> */}
            <h2>{props.name}</h2>
        </div>
    )

}

export default Faq;

