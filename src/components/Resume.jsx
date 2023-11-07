import React from "react";
import "../styles/Resume.css";

function Resume(){

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
      
       <div  class="cards">
         <h3 align="center">Schedule an Appointment</h3>
       
        <p>Not sure if we can help you? Interested in Learning more about the service over a free 5 minute WhatsApp session with us?</p>
        <label for="preferdate">Preferred Date : </label>
        <input placeholder="Preferred date" class="date" type="date" /><br /><br />
        <label for="mobilenum">Mobile Number : </label>
        <input placeholder="Mobile Number" class="mobilenum" type="text" /><br /><br />
        <label for="doubts">Doubts regarding : </label>
        <select name="doubts" id="doubts">
         <option value="sop"> Drafting Statement of Purpose</option>
         <option value="universitylist">University Shortlisting</option>
         <option value="gre">GRE Preparation</option>
         <option value="visa">Visa Application Help</option>
         <option value="Resume">Resume Drafting</option>
        </select><br /><br />
        <input type="button" value="Book Now" id="booknow" />
       </div>
    </body>
    
        </>
    )
  
};

export default Resume;
