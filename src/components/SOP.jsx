import React from "react";
import { useState } from "react";
import "../styles/sop.css";
import Axios from "axios"
import serverConfig from "../config"

const SOP=()=>{
const [name, setName]=useState('');
const [email,setEmail]=useState('');
const [mobilenumber,setMobilenumber]=useState('');

const handleClick = () => {
    Axios.post(`${serverConfig.backend_url}/add_usersop_appointment`, {
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
    return(
        <>
    <body>
       <div class="sop-image">
       <img src="../images/sop.png" />
       </div>
      
        <div class="info" >
        <h2 align="center">About Service</h2>
        <p>Disclaimer: I received admits from USC, UBC, UIUC, Cornell, UCSD, Purdue, and NYU for Fall 2019.</p>

        <p>The SOP is one of the most critical parts of your application because it helps the admissions committee know your personal interests and experiences. No other part of the application conveys this information to the committee. It can help you explain your sins and give reason that they will not be repeated. It can help you change a reject to an admit. It can also help you change an admit to an admit with funding. Given this importance, we want to ensure YOU get the best. For the same reason, our drafts are written by students who have already graduated from some of the top Ivy League universities.</p>
        
        <p>A Statement of Purpose/Personal Statement can actually make or break your application. It is the ticket to your dream university if done right.</p>
        <p>All of the aforementioned points come under customizations. However, a completely new essay is not covered under customizations. Please note that customizations are different from modifications. Modifications in our service are free of charge.</p>
        
        <p>Please Note: We prefer drafting from scratch, but we will take your existing draft in consideration (if you already have one ready).</p>
        
        <p>This is going to change lives. The only question is, are you next? Good. Let's get you into your dream university!</p>
       </div>
      <form method="post" class="cards" onSubmit={(e) => {e.preventDefault()}}>
       <div class="sop">
         <h3 align="center">Schedule an Appointment</h3>
       
        <p>Not sure if we can help you? Interested in Learning more about the service over a free 5 minute WhatsApp session with us?</p>
        <label for="name">Name : </label>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/><br /><br />
        <label for="email">E-Mail : </label>
        <input type="text" placeholder="E-mail ID" value={email} onChange={(e) => setEmail(e.target.value)}/><br /><br />
        <label for="mobilenumber">Mobile Number : </label>
        <input type="number" placeholder="Mobile Number" value={mobilenumber} onChange={(e) => setMobilenumber(e.target.value)}/><br /><br />
        <label for="doubts">Doubts regarding : </label>
        <select name="doubts" id="doubts">
         <option value="sop"> Drafting Statement of Purpose</option>
         <option value="universitylist">University Shortlisting</option>
         <option value="gre">GRE Preparation</option>
         <option value="visa">Visa Application Help</option>
         <option value="Resume">Resume Drafting</option>
        </select><br /><br />
        <button onClick={handleClick}>Submit</button>
        </div>
       </form>
    </body>
    
        </>
    )
  
};

export default SOP;
