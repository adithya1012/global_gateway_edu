import React from "react";
import "../styles/Alumni.css";

function Alumni() {

  return (
    <body>
    <aside id="headertext" >
    
<img align="right" src="../images/alumni.png" id="alumni-img"  />

<p id="heading1">Build & Engage<br />your alumni community</p>
<p id="text1">GGE helps you connect with your university alumni network</p>
<button id="btn">Schedule a free demo</button>
    </aside>
   <div class="review" id="review1">
    <div class="reviewHead">
        <h3>Shreya Mehta</h3>
        
    </div>
    <div>
        <h4>Cornwell university |</h4>
        <h4>Engineering</h4>
    </div>
    <p>"I know I'll be pushing my kids to goto Cornell. Enough said. But for more details: One of the best engineering programs in the country (or world). Fantastic alumni connections. People know you are a serious candidate for employment. A huge variety of opportunities are presented to you at Cornell. Make the most of it!"</p>
   </div>
   <div class="review1" id="review2">
    <div class="reviewHead">
    <h3>Parthiv Patel</h3>
    
    </div>
<div>
    <h4>Yale university |</h4>
    <h4>Biology</h4>
</div>
   
    
    <p>"Best biology PhD program!!! Yale is a special Ivy. When I interviewed at Harvard and other top schools, PhD students are stressed and under a lot of pressure. Yale GSAS and the BBS program actually care about PhD students mental health and design programming for us while still being a world class research university."</p>
   </div>
   <div class="review2" id="review3">
    <div class="reviewHead">
        <h3>Yashika</h3>
    </div>
   
    <h4>Washington University in St. Louis |</h4>
    
    
    <h4>Political Science</h4>
    
    <p>"First, I absolutely love WashU. Not only does it have an incredible family atmosphere, with incredibly smart and driven students, but is an incredible institution. I made a lot of my best friends while earning my bachelors and was able to take on multiple leadership roles across campus. The professors are world class and help you to succeed at whatever your career aspirations may be."</p>
   </div>
   
   <div class="video-card1">
    
        <iframe width="400" height="200" src="https://www.youtube.com/embed/hFHHl3_6zLs" frameborder="0" allowfullscreen></iframe>
    
    <h2>Purdue Fort Wayne</h2>
</div>
<br />
<div class="video-card2">
    
    <iframe width="400" height="200" src="https://www.youtube.com/embed/dKKWu5N-h-w" frameborder="0" allowfullscreen></iframe>

<h2>CSU East Bay</h2>
</div>
<br />
<div class="video-card3">
    
<iframe width="400" height="200" src="https://www.youtube.com/embed/WZ9V-HUEFyE" frameborder="0" allowfullscreen></iframe>

<h2>New York University</h2>
</div>
<br />


</body>
  );
}

export default Alumni;
