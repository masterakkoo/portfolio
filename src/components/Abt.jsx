import React from "react";
import "../css/abt.css"
import css from "../photo/cssn.png"
import cn from "../photo/c++n.png"
import jsn from "../photo/jsn.png"
import html from "../photo/htmln.png"
import reactn from "../photo/reactn.png"
import profe from "../photo/profe.png"

const Abt = () => {
    return (
        <>
            <div id="abt">
                <div className="photo">
                    <img src={profe} alt="" />
                </div>
                <div className="info2">
                    <div className="av">
                        <div>
                            <h1> About <span style={{ color: "#6eff00", fontSize: "3rem" }}> Me</span></h1>
                            <p>I'm a passionate programmer , Devloper , student </p>
                            <p>loves to learn new technology.</p>
                        </div>
                        <div className="know">
                            <img src={cn} alt="" />
                            <img src={html} alt="" />
                            <img src={css} alt="" />
                            <img src={jsn} alt="" />
                            <img src={reactn} alt="" />
                        </div>
                        <div className="cv" >
                            <a href="https://drive.google.com/file/d/16ESCyZuEUAITCDCqYXdIuF-th2cfazXA/view?usp=sharing"><button>Download Cv</button></a>
                        </div >
                    </div >
                </div >

            </div >
        </>
    );
}

export default Abt;