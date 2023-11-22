import React, { Component,useRef } from "react";
// import lorImage from "../images/lor.png"
import "../styles/lorService.css";


const LorService = () => {
    
    return (
        <body class="lorSeviceBody">
            <div class="lorImage"></div>
                
            <section class="lorSevice_content_split">
                <section class="lorSevice_info">
                <h1 class="lorSevice_info_heading">LOR Service Page</h1>
                <section>
                <p>At GGE, we recognize the significance of strong Letters of Recommendation (LORs) in your pursuit of higher education abroad. As you embark on this academic journey, we are delighted to introduce our exceptional Letter of Recommendation service to support and enhance your application.</p></section>
                <br />
                <p>Crafting persuasive LORs is an integral part of the application process, and we are here to provide the guidance and expertise you need to make a compelling case for your candidacy.</p>
                <br />
                
                </section>
                <section class="lorSevice_shedule">
                    <div class="lorSevice_box">
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
            
            <section class="lorService_apart">
            <hr />
                <p>What sets us apart?</p>
                <ul>
                    <li><h4>Expert Guidance:</h4> Our team of seasoned educators and mentors possesses extensive experience in guiding students through the LOR process. We offer personalized consultations to help you select the right recommenders and guide them in crafting impactful letters that highlight your strengths and qualifications.</li>
                    <li><h4>Tailored Recommendations:</h4> We understand that each student has a unique story to tell. Our experts work closely with you and your recommenders to ensure that the letters are tailored to your academic and career aspirations, making your application stand out. </li>
                    <li><h4>Comprehensive Support:</h4> We provide comprehensive resources and tools to streamline the LOR process. From sample templates and guidelines for recommenders to tips for drafting your own self-assessment, we leave no stone unturned in equipping you with the necessary resources.</li>
                    <li><h4>Timely Assistance:</h4> We appreciate the importance of meeting application deadlines. Our efficient LOR service ensures that recommenders have the guidance and materials they need to produce high-quality letters within the stipulated time frames. </li>
                    <li><h4>Proven Success:</h4> Numerous success stories from students who have secured admissions to their dream universities with our LOR service attest to our commitment to your academic goals. </li>
                </ul>
                <br />
                <p>Your journey to higher education begins here. Let us be your partners in securing powerful Letters of Recommendation that will pave the way for your future success. Together, we'll transform your aspirations into achievements.</p>
            </section>
        </body>
    );
}

export default LorService;

