import React from "react";
import { useState, useEffect } from "react";
import styles from "../css/Login.module.css";
import Footer from "./Footer";
//import Comment from "./Comment";
import axios from "axios";
const Login = () => {
  
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [message, setmessage] = useState(null);
  const [login, setLogin] = useState(false);
  const [logout, setLogout] = useState(false);
  const [store, setStore] = useState(null);
  const [comment, setcomment] = useState("Add comments....");

  useEffect(() => {
    storeCollector()
  }, []);

  const storeCollector = () =>{
    let store = JSON.parse(localStorage.getItem("login"));
    setStore(store)
    if(store){
setLogin(true);

    }
  }

  const handleLogout = ()=>{
    localStorage.clear(store);
   setLogin(false);
   setmessage("Logged out successfully");
    console.log(localStorage.getItem(store.token));
  }

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
  
  const handleComment = (e) =>{
    setcomment(e.target.value);
}
  const validate = () => {
  
    const emailCheck = /^[A_Za-z]{3,}@[A-Za-z]{3,}[.]{1}[AZa-z.]{2,6}/;

    if (email === "") { 
      setemailError("Please fill the field");
    }
    else if (!emailCheck.test(email)) {
     
     setemailError("** Invalid email address");
   } 

   else{
  return emailError;
 }


    if (password === "") {
 
      setpasswordError("Please fill the field");
    }
  };
  const handleSubmitComment = e => {
    e.preventDefault();
    let token =  store.token;
       
    const comments = {
      comment: comment
    };
  
    axios.post("comments/add", comments, { headers : {
      
      "x-auth-token":token
      
            }}).then(res => { 
              console.log(token);
      console.log(res.data);
      setLogin(true);
      
      setcomment("");
      setmessage("Posted succesfully!");
      
      
    });
  

  }
  const handleSubmit = e => {
    e.preventDefault();

    validate();
    
      
      const user = {
        email: email,
        password: password,
        
      };
    

      axios.post("userauthentication", user).then(res => { 
        console.log(res.data);
        localStorage.setItem("login", JSON.stringify({
          login:true,
          token:res.data.token
        }));
        setLogin(true);
        setmessage("You are Loggedin!");
        setemailError("");
        setpasswordError("");        
        setpassword("");
        setemail("");
        storeCollector()
      });
    
    
  };

  return (
    <div className={styles.wrapper}>
      { !login ?
      
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
                <button className={styles.login_button} type="submit">Log In</button>
              </div>
              <div className={styles.message}>{message}</div>
            </form>
          </div>
        </div>
        {logout}
      </div>
      
      :
      
      <div className={styles.comment_container}>
        
          <button onClick={handleLogout} className={styles.logout_button}>Logout</button>

      <div className={styles.form}>
        <form onSubmit={handleSubmitComment}>
          <textarea
          onChange={handleComment}
            className={styles.textarea}
            name="comment"
            id=""
            cols="30"
            rows="10"
            value={comment}
          ></textarea>
          <button className={styles.submitComment} type="submit" >Submit</button>
        </form>
      </div>
      <div className={styles.message_span}>
      <span className={styles.message}>{message}</span>
      </div>
</div>
}
      <Footer />

    </div>

    
  );
};
export default Login;
