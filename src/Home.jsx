
import React from "react";
import Check from "./components/Check";
import Abt from "./components/Abt";
import Slider from "./components/Slider";
import Work from "./components/Work";
import Card2 from "./components/Card2";
import Card2data from "./components/Card2data";
import Footer from "./components/Footer"
import Slide_card from "./components/Slide_card";
import More from "./components/More";
const Home = () => {
    return (<>
        <div className="main-body">

            <Check />
            <Abt />
            {/* <Work /> */}


            <More />
            <Footer />

        </div>
    </>)
}

export default Home;