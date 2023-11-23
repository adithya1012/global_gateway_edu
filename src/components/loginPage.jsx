import React, { Component,useRef, useState } from "react";
import "../styles/login.css"
import Axios from "axios";


// const wrapper = document.querySelector('.wrapper');
// const loginlink = document.querySelector(".login-link");
// const registerlink = document.querySelector(".register-link");

// registerlink.addEventListener('click', ()=> {
//     wrapper.classList.add('active');
// });

// loginlink.addEventListener('click', ()=> {
//     wrapper.classList.remove('active');
// });



const LoginBody = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const signinHandle = () => {
      Axios.post("http://localhost:8000/add_user_detail", {
        name: name,
        email: email,
        password: pwd,
      })
        .then((response) => {
          console.warn(response.data);
          alert("Data saved successfully");
          setName("");
          setEmail("");
          setPwd("");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    const componentIsMounted = useRef(true);

// useEffect(() => {
//   return () => {
//     // Component is unmounting
//     componentIsMounted.current = false;
//   };
// }, []);
    // const signinHandle = async () => {
    //   try {
    //     const response = await Axios.post("http://localhost:8000/add_user_detail", {
    //       name: name,
    //       email: email,
    //       password: pwd,
    //     });
    
    //     if (componentIsMounted.current) {
    //       console.warn(response.data);
    //       alert("Data saved successfully");
    //       setName("");
    //       setEmail("");
    //       setPwd("");
    //     }
    //   } catch (error) {
    //     console.error("Error:", error);
    //   }
    // };
    const LoginHandle = async (e) => {
      e.preventDefault();
      try {
        // Assuming you have a server endpoint for updating the profile
        const response = await Axios.post('http://localhost:8000/Login_user', {
          // name: name,
          email: email,
          password: pwd,
        });
  
        // Handle the response accordingly
        console.log(response.data); // Assuming the server returns a response
        if (response.data === "Success") {
          alert("User Authentication successful")
          // props.value("Home");
        }
        else {
          alert("Username/Password is incorrect. Please try again !")
        }
        
      } catch (error) {
        // Handle error
        alert("Username/Password is incorrect. Please try again !")
        console.error("Error updating profile:", error);
      }
    };

    const wrapperActive = useRef(null);
    const handleClickregiter = () => {
        // registerLinkRef.current.style.backgroundColor = 'Red';
        wrapperActive.current.classList.add('active')
    };
    const handleClicklogin = () => {
        wrapperActive.current.classList.remove('active')
    };
    return (
        <body class="LoginPage">
            {/* <!-- https://ionic.io/ionicons/usage --> */}
        <script src="script.js"></script>
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
        {/* <header>
          <h2 class="logo">GGE</h2>
          <nav class="navigation">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>signinHandle
            <button class="btnLogin-popup">Login</button>
          </nav>
        </header> */}
        <div class="Login-wrapper" ref={wrapperActive}>
          {/* <!-- <span class="icon-close"><ion-icon name="close"></ion-icon></span> --> */}
    
          <div class="form-box login">
            <h2>Login</h2>
            <form method="put" name="login"  onSubmit={(e) => e.preventDefault()}>
              <div class="input-box">
                <span class="icon"><ion-icon name="mail"></ion-icon></span>
                <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>E-mail</label>
              </div>
              <div class="input-box">
                <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input type="password" name="password" required value={pwd} onChange={(e) => setPwd(e.target.value)} />
                <label>Password</label>
              </div>
              <div class="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#"> Forgot Password?</a>
              </div>
              <button type="submit" class="login-btn" onClick={LoginHandle}>Login</button>
              <div class="login-register">
                <p>
                  Don't have an account?
                  <a href="#" class="register-link" onClick={handleClickregiter}>Register</a>
                </p>
              </div>
              </form>
          </div>
    
          <div class="form-box register">
            <h2>Registration</h2>
            <form method="post" name="signup"  onSubmit={(e) => e.preventDefault()}>
              <div class="input-box">
                <span class="icon"><ion-icon name="person"></ion-icon></span>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Name</label>
              </div>
              <div class="input-box">
                <span class="icon"><ion-icon name="mail"></ion-icon></span>
                <input type="text" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>E-mail</label>
              </div>
              <div class="input-box">
                <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input type="password" name="password" required value={pwd} onChange={(e) => setPwd(e.target.value)} />
                <label>Password</label>
              </div>
              <div class="remember-forgot">
                <label><input type="checkbox" />Agree Terms & Condition</label>
              </div>
              <button type="submit" class="login-btn" onClick={signinHandle}>Register</button>
              <div class="login-register">
                <p>
                  Already have an account?
                  <a href="#" class="login-link" onClick={handleClicklogin}>Login</a>
                </p>
              </div>
              </form>
          </div>
        </div>
    
        
      </body>
      
    );
}

export default LoginBody;