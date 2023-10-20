import React from "react";
import "../Finance.css";
function Finance(){
    const icicibank=()=>{
     
            window.location = "https://www.icicibank.com/personal-banking/loans/education-loan"; 
    }
    const hdfcbank=()=>{
     
        window.location = "https://www.hdfcbank.com/personal/borrow/popular-loans/educational-loan/education-loan-for-foreign-education"; 
}
const axisbank=()=>{
     
    window.location = "https://www.axisbank.com/nri/axis-bank-horizon"; 
}
const sbibank=()=>{
     
    window.location = "https://sbi.co.in/web/personal-banking/loans/education-loans/global-ed-vantage-scheme"; 
}

    return(
        <>
<body class="financeservice">
    <img align="left" src="../images/finance.PNG" id="main-image" width="100%" height="400" />
        <div>
            <h1 class="heading">GGE Finance Service has you covered</h1>
            <p class="para">Highly reviewed and rated, these student loan companies can help you make your educational dreams a reality. Quickly apply and get an instant decision. Specializing in private loans, refinancing, and options for both undergraduates and graduate degrees, these trusted student loan companies will help you find the right loan to meet your needs, budget, and school of choice.</p>
        </div>
        <div class="bank">
           
                <img align="left" id="icici" src="../images/icici.PNG" width="10%" height="60" />
                <div class="content">
                <ul class="bank-details">
                    
                    <li>Cover up to 100% of your cost of attendance: tuition, fees, and other costs</li>
                    <li>Option to start repaying immediately or after you complete your degree</li>
                    <li>Choose how long it takes to repay your loan based on your budget</li>
                    <li>No application, origination, or prepayment fees</li>
                </ul>
                <button align="right" value="submit" id="learnmore" onClick={icicibank}>Learn More </button>
            </div>
           </div>
           <div class="bank">
            <img align="left" id="hdfc" src="../images/hdfc.PNG" width="12%" height="90" />
            <div class="content">
            <ul class="bank-details">
                <li>No fees ever</li>
                <li>Multiple repayment options including no payments until after graduating</li>
                <li>Cover up to 100% of your school certified costs</li>
                <li>Students with cosigners are 5x more likely to be approved</li>
            </ul>
            <button align="right" value="submit" id="learnmore" onClick={hdfcbank}>Learn More </button>
        </div>
       </div>
       <div class="bank">
        <img align="left" id="hdfc" src="../images/axis.PNG" width="14%" height="90" />
        <div class="content">
        <ul class="bank-details">
            <li>Get prequalified in minutes</li>
            <li>Variable rates starting at 5.49% APR (with autopay)</li>
            <li>Compare rates and fees from multiple lenders without affecting your credit score</li>
            <li>Fixed rates starting at 4.41% APR (with autopay)</li>
        </ul>
        <button align="right" value="submit" id="learnmore" onClick={axisbank}>Learn More </button>
    </div>
   </div>
   <div class="bank">
    <img align="left" id="sbi" src="../images/sbi.PNG" width="14%" height="90" />
    <div class="content">
    <ul class="bank-details">
        <li>Apply online in minutes and receive an instant credit result</li>
        <li>Multiple repayment options from in-school payments to deferred.</li>
        <li>Borrow up to 100% of school-certified expenses</li>
        <li>APR starting at 4.50% with autopayment discount</li>
        <li>No origination fee or prepayment penalty.</li>
    </ul>
    <button align="right" value="submit" id="learnmore" onClick={sbibank}>Learn More </button>
</div>
</div>


</body>
        </>
        
    )
};

export default Finance;