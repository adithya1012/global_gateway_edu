import React, { Component,useRef } from "react";
import greImage from "../images/GRE.png"
import "../styles/visaprep.css";


const Visaprep = () => {
    
    return (
        <body class="VisaprepBody">
            <div class="VisaImage"></div>
                
            <section class="Visaprep_content_split">
                <section class="Visaprep_info">
                <h1 class="Visaprep_info_heading">Visa Preparation</h1>
                <section>
                <p>Empower your international education journey with our Visa Preparation service, ensuring a seamless and stress-free process for students aspiring to study abroad</p></section>
                <br />
                <p>Unlock global opportunities effortlessly with our Visa Preparation service, providing expert guidance and comprehensive resources to navigate the visa application process with confidence.</p>
                <br />
                
                </section>
                <section class="Visaprep_shedule">
                    <div class="Visaprep_box">
                        <h3 >Shedule an Appointment</h3>
                        <br />
                        <section>Name: <input type="text" /></section>
                        <br />
                        <section>Phone: <input type="phone" /></section>
                        <br /><br />
                        <button>Submit</button>
                    </div>
                </section>
            </section>
            
            <section class="Visaprep_apart">
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

export default Visaprep;

