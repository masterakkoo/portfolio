import React, { useEffect } from 'react'
import "../css/contact.css"
import Footer from "../components/Footer"
import { useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';


function Contacts() {
    const [user, setuser] = useState({ fname: "", lname: "", email: "", subject: "", message: "" });

    const Handle = (e) => {
        console.log(e);
        const nam = e.target.name;
        const val = e.target.value;
        setuser({ ...user, [nam]: val })
        console.log(user)

    }
    const SUBMIT = async (e) => {
        console.log(e)
        e.preventDefault();
        console.log(user)
        const { fname, lname, email, subject, message } = user;
        const res = await fetch("https://portfolio-12-5he1.onrender.com/register", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ fname, lname, email, subject, message })
        })
        const rest = await res.json()
        if (rest.success == true)
            window.alert("succesfull")

        setuser({ fname: "", lname: "", email: "", subject: "", message: "" });
    }

    return (
        <>
            <div className='contact'>
                <div className='left-cont'>
                    <h3>Let's get In Touch</h3>
                    <p>If you want to contact me. you can use form , phone number, email and my address</p>
                    <div className='phone1'>
                        <CallIcon />
                        <p>8303451114</p>
                    </div>
                    <div className='address1'>
                        <LocationOnIcon />
                        <p>Ramanujan Hostel,HBTU East Campus,Nawabganj,Kanpur</p>
                    </div>

                    <div className='gmail1'>
                        <EmailIcon />
                        <p>masterak9918@gmail.com</p>
                    </div>

                </div>
                <div className='right-cont'>
                    <h1>Get In Touch</h1>
                    <form  >
                        <div className='name'>
                            <label for="fname">Full Name:</label>
                            <input type="text" id="fname" name="fname" placeholder='fast name' value={user.fname} onChange={Handle} />
                            <input type="text" id="lname" name="lname" placeholder='last name' value={user.lname} onChange={Handle} />
                        </div>
                        <div className='email'><label for="email">Email ID:</label>
                            <input type="email" name="email" id="email" placeholder='Email' onChange={Handle} value={user.email} /></div>
                        <div className='subject'><label for="subject">subject:</label>
                            <input type='text' name="subject" placeholder='Subject' onChange={Handle} value={user.subject}></input></div>

                        <div className='message'><label for="message" >Message:</label>
                            <textarea type='textarea' name='message' placeholder='message' onChange={Handle} value={user.message}></textarea></div>

                        <div className='submit'>
                            <input type="submit" value="Submit" onClick={SUBMIT} />
                        </div>

                    </form>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Contacts;