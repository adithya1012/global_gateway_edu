import React, { Component,useRef, useState } from "react";
import greImage from "../images/GRE.png"
import "../styles/greService.css";
import Axios from "axios"


const GreService = () => {
const [name, setName]=useState('');
const [email,setEmail]=useState('');
const [mobilenumber,setMobilenumber]=useState('');

    const handleClick = () => {
        Axios.post("http://localhost:8000/add_user_appointment", {
          name:name,
          email:email,
          mobilenumber:mobilenumber,
        })
          .then((response) => {
            console.warn(response.data);
            alert("Appointment confirmed. We'll discuss details via WhatsApp. Thank you.");
            setName("");
            setEmail("");
            setMobilenumber("");
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };
    
    return (
        <body class="greSeviceBody">
            <div class="greImage"></div>
                
            <section class="greSevice_content_split">
                <section class="greSevice_info">
                <h1 class="greSevice_info_heading">GRE Service Page</h1>
                <section>
                <p>At GGE, we understand the ambitions and dreams of students aspiring to pursue higher education abroad. Our commitment to guiding you towards academic excellence is unwavering, and we are thrilled to introduce our comprehensive GRE preparation service.</p></section>
                <br />
                <p>Studying abroad is a life-changing experience, and achieving a competitive GRE score is often a critical step towards that goal. Our GRE service equips you with the knowledge, skills, and confidence needed to excel in the GRE exam, opening doors to your dream universities.</p>
                <br />
                
                </section>
                <section class="greSevice_shedule" method="post">
                    <div class="greSevice_box">
                        <h3 >Shedule an Appointment</h3>
                        
                        <br />
                        <section>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/></section>
                        <br />
                        <section>E-mail: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/></section>
                        <br />
                        <section>Mobile number: <input type="number" value={mobilenumber} onChange={(e) => setMobilenumber(e.target.value)}/></section>
                        <br /><br />
                        <button onClick={handleClick}>Submit</button>
                    </div>
                </section>
            </section>
            
            <section class="greService_apart">
            <hr />
                <p>What sets us apart?</p>
                <ul>
                    <li><h4>Expert Guidance:</h4> Our team of experienced educators and mentors are dedicated to your success. We offer personalized guidance, exam strategies, and study plans tailored to your unique strengths and weaknesses.</li>
                    <li><h4>Comprehensive Resources:</h4> Access a treasure trove of study materials, from GRE practice tests and mock exams to study guides and interactive learning platforms. We leave no stone unturned in providing you with the tools you need.</li>
                    <li><h4>Flexible Learning:</h4> We understand the demands of your schedule. Our flexible online learning solutions allow you to study at your own pace, anytime, and anywhere.</li>
                    <li><h4>Proven Results:</h4> Countless success stories stand testament to our commitment to your dreams. Join the ranks of our satisfied students who have achieved remarkable GRE scores.</li>
                </ul>
                <br />
                <p>Your GRE journey starts here. Let us be your compass on the path to success. Together, we'll transform your dreams into reality.</p>
            </section>
        </body>
    );
}

export default GreService;

