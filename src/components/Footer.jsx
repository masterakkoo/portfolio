import React from "react";
import "../css/footer.css"
import linked from "../photo/linked.png"
import face from "../photo/face.png"
import instra from "../photo/instra.png"
const Footer = () => {
    return (<>
        <div className="foot-main">
            <div className="footer-n">
                <div className="f1">
                    <h1>Languages</h1>
                    <p>C++</p>
                    <p>Python</p>
                    <p>Javascipt</p>
                    <p>Html</p>
                    <p>Html</p>
                    <p>Html</p>
                </div>
                <div className="f2">
                    <h1>Social Media Handles</h1>
                    <p>Facebook</p>
                    <p>Linkedin</p>
                    <p>Instragram</p>
                    <p>Codechef</p>
                    <p>Codechef</p>
                    <p>Codechef</p>
                </div>

                <div className="f4">
                    <a href="www.linkedin.com/in/akash-verma-62a036227" className="st-a"><img src={linked} alt="" /> </a>
                    <a href="https://www.instagram.com/"> <img src={instra} alt="" /> </a>
                    <a href="https://www.facebook.com/"> <img src={face} alt="" /> </a>
                </div>

            </div>
            <div className="f5">
                <h3>Akash Verma</h3>
                <p>Copyright  2022-2025</p>
                <p>All right reserved Powered by Portfolio Akash</p>
            </div>
        </div>
    </>);
}
export default Footer;