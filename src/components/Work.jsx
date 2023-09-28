
import pro11 from "../photo/pro11.png"
import pro2 from "../photo/pro2.png"
import Footer from "../components/Footer"
import "../css/work.css"
import React, { useRef, useState } from "react";
import Project_slider from "./Project_slider";



const Work = () => {
    return (
        <>
            <div id="work">
                <div id="wor">
                    <span className="head1">PROJECTS</span>
                </div>

                <div id="proj">
                    {/* <div className="first">
                        <img src={pro11} alt="" />
                    </div>
                    <div className="second">
                        <span>PROJECT 01</span>
                        <ul>
                            <li> Created this website to show top Korean dramas of all time.
                            </li>
                            <li> Implemented Jsx,CSS and ReactJs to create this website.</li>
                            <li> Each Drama is provided with its streaming link.
                            </li>
                        </ul>
                    </div> */}
                    <Project_slider />
                </div>
            </div>
            <Footer />

        </>
    );

}
export default Work;
