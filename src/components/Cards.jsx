import React from "react";
import "./cards.css"
function Cards(props) {
    return (
        <>
            <div className='card'>
                <img src={props.image} className='card2_image' style={{ height: "500px", width: "1200px" }} />
            </div>
        </>
    );
}

export default Cards;