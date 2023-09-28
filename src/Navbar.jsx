
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';

import { NavLink } from "react-router-dom";
const Navbar = () => {
    const [icon, seticon] = useState(false);
    return (
        <>
            <div className="navbar1">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="p-4">
                        <NavLink to='/' style={{ textDecoration: 'none' }}><li className="line-h">Home</li></NavLink>
                        <NavLink to='/contact' style={{ textDecoration: 'none' }} ><li className="line-h">Contact</li></NavLink>
                        {/* <NavLink to='/achievments' style={{ textDecoration: 'none' }}><li>Course</li></NavLink> */}
                        <NavLink to='/work' style={{ textDecoration: 'none' }}><li className="line-h">Work</li></NavLink>
                    </div>
                </div>
                <nav class="navbar navbar-dark">
                    <div class="container-fluid">
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarToggleExternalContent"
                            aria-controls="navbarToggleExternalContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                </nav>

                {/* <div className="nav">

                <div className="nav-left"><AccountBoxRoundedIcon /><p>  AKASH</p></div>
                <div className="blank1"></div>
                <div className={(!icon) ? "nav-mid" : "hammenu"}>
                    <NavLink to='/' style={{ textDecoration: 'none' }}><li className="line-h">Home</li></NavLink>
                    <NavLink to='/contact' style={{ textDecoration: 'none' }} ><li className="line-h">Contact</li></NavLink>
                    <NavLink to='/achievments' style={{ textDecoration: 'none' }}><li>Course</li></NavLink>
                    <NavLink to='/work' style={{ textDecoration: 'none' }}><li className="line-h">Work</li></NavLink>
                </div >

                <div className="nav-right">
                    <p>Sign/signup</p>
                </div>
                <div className="search">search</div>
                <div className="nmenu">
                    <a href="#" onClick={() => { seticon(!icon) }}>
                        {(!icon) ? <GiHamburgerMenu /> : <RxCross1 />}
                    </a></div>
            </div> */}
            </div>
        </>
    );
}

export default Navbar;
