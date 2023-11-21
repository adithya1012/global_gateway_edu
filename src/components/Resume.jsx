import React, {useState} from "react";
import "../styles/Resume.css";
import Axios from "axios"

const Resume=()=>{
const [name, setName]=useState('');
const [email,setEmail]=useState('');
const [mobilenumber,setMobilenumber]=useState('');

const handleClick = () => {
    Axios.post("http://localhost:8000/add_userresume_appointment", {
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
       <div class="resume-image">
       <img src="../images/Resume.png" />
       </div>
       
        <div class="info" >
        <h2 align="center">About Service</h2>
        <p>It is extremely critical to have an eye-catching one-page resume unless you have an industry experience of over 5 years. When an employer looks at my resume, he is usually amazed by the conciseness, organization, and pertinence of the content.</p>

        <p>While the Statement of Purpose covers the most career-shaping experiences and how they define your prospective interests, the resume will provide insights into your professional experience as a subject-matter expert. This is an important characteristic to shed light on. In fact, our reports show that a well-crafted draft can boost your chances of bagging the admits and scholarships by over 18%.</p>
        
        <p>An average employer looks at a resume for less than 10 seconds. With a resume tailored for employers in the USA/Canada, you are officially two steps ahead of the average applicant who applies for internships and jobs. With a stellar resume, an employer is bound to give your application more attention than your competitors.</p>
        
        <p>Now, we can help you craft the perfect resume that is coherent with your profile. Increase your chances of gaining admission, internships, assistantships, and employment.</p>
       <br /><br /></div>
      
       <form  class="cards" method="post" onSubmit={(e) => {e.preventDefault()}}>
         <h3 align="center">Schedule an Appointment</h3>
       
        <p>Not sure if we can help you? Interested in Learning more about the service over a free 5 minute WhatsApp session with us?</p>
        <label for="name">Name : </label>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/><br /><br />
        <label for="email">E-Mail : </label>
        <input type="email" placeholder="E-mail ID" value={email} onChange={(e) => setEmail(e.target.value)}/><br /><br />
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
        <button onClick={handleClick} id="booknow">Submit</button>
       </form>
    </body>
    
        </>
    )
  
};

export default Resume;
