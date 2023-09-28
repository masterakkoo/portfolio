import React from "react";
import Cards from "./Cards";
import "../css/card2.css"

const Card2 = (props) => {
    const para_card = "para_card"
    return (<>
        <div className={(props.index % 2 === 0) ? "card22" : "card21"}>
            <div className="left-view">
                <h1 className={(props.index % 2 === 1) ? "flex1" : "flex2"}>{props.index}</h1>
                <h3 className={(props.index % 2 === 1) ? "flex1" : "flex2"}>{props.heading}</h3>
                <p className="para-card" >{props.data}</p>
            </div>
            <div className="right-view">
                <img src={props.image} />
            </div>
        </div >
    </>);
}
export default Card2;