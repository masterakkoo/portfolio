import React from "react";
import Pro1 from "../photo/pro1.png"
import linked from "../photo/linked.png"
import face from "../photo/face.png"
import instra from "../photo/instra.png"
import "./Check.css"
const Check = () => {
    return (<>
        <div id="main">
            <div className="sone">
                <img src={Pro1} alt="" />
            </div>
            <div className="in">
                <h1>HEY,This is <span> Akash Verma</span>,</h1>
                <div className="info">
                    <p>Welcome to My portfolio page And I hope you will
                        get some useful information from here , use the
                    </p>
                    <p> navigation bar to know further
                        about me further about me
                        Thanks For visiting here
                    </p>
                </div>
                <div className="pr">
                    <a href="www.linkedin.com/in/akash-verma-62a036227"><img src={linked} alt="" /> </a>
                    <a href="https://www.instagram.com/"> <img src={instra} alt="" /> </a>
                    <a href="https://www.facebook.com/"> <img src={face} alt="" /> </a>
                </div>
            </div>
        </div>
        
    </>);
}
export default Check;