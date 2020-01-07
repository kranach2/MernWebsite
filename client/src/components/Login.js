import React from "react";
import { useState } from "react";
import styles from "../css/Login.module.css";
import Footer from "./Footer";
import { Redirect } from "react-router-dom";
import Comment from "./Comment";
//import localstorage from "reactjs-localstorage";
import axios from "axios";
const Login = () => {
  //const [user, setuser] = useState([]);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [message, setmessage] = useState("");
  //const [loggedIn, setLoggedIn]=useState(false);
  const handleEmail = e => {
    return setemail(e.target.value);
  };
  const handlePassword = e => {
    return setpassword(e.target.value);
  };
  const handleEmailKey = () => {
    return setemailError("");
  };
  const handlePasswordKey = () => {
    return setpasswordError("");
  };
  
  const validate = () => {

    if (email === "") {
      
      setemailError("Please fill the field");
    }
    else{
      setemailError("");
    }

    if (password === "") {
 
      setpasswordError("Please fill the field");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const error = validate();
    if (!error) {
      
      const user = {
        email: email,
        password: password,
        
      };
    
      axios.post("userauthentication", user).then(res => { 
        console.log(res.data.user.firstname);
        setemailError("");
        setpasswordError("");        
        setpassword("");
        setemail("");
        setmessage("Logged in succesfully!");
        
      });
    }
    
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.bg}>
          <div className={styles.center_div}>
            <h2 className={styles.heading_two}>Login In</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.email_div}>
                <input
                  onChange={handleEmail}
                  onKeyDown={handleEmailKey}
                  className={styles.email}
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Email &#42;"
                />
                 <span className={styles.email_error}>{emailError}</span>
              </div>
              <br />
              <div className={styles.password_div}>
                <input
                onChange={handlePassword}
                onKeyDown={handlePasswordKey}
                  className={styles.password}
                  value={password}
                  type="password"
                  name="password"
                  placeholder="Password &#42;"
                />
                 <span className={styles.password_error}>{passwordError}</span>
              </div>
              <br />

              <div>
                <button type="submit">Log In</button>
              </div>
              <div>{message}</div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
