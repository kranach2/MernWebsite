import React from "react";
import { useState } from "react";
import styles from "../css/Register.module.css";
import Footer from "./Footer";
import axios from "axios";

const Register = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [contact, setcontact] = useState("");
  const [loading, setloading] = useState(false);
  const [message, setmessage] = useState("");
  const [firstNameError, setfirstNameError] = useState("");
  const [lastNameError, setlastNameError] = useState("");
  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [contactError, setcontactError] = useState("");

  const handleFirstName = e => {
    return setfirstname(e.target.value.toUpperCase().substr(0, 20));
  };
  const handleLastName = e => {
    return setlastname(e.target.value.toUpperCase().substr(0, 20));
  };
  const handleEmail = e => {
    return setemail(e.target.value);
  };
  const handlePassword = e => {
    return setpassword(e.target.value);
  };
  const handleContact = e => {
    return setcontact(e.target.value);
  };

  const handleFirstNameKey = () => {
    return setfirstNameError("");
  };
  const handleLastNameKey = () => {
    return setlastNameError("");
  };
  const handleEmailKey = () => {
    return setemailError("");
  };
  const handlePasswordKey = () => {
    return setpasswordError("");
  };
  const handleContactKey = () => {
    return setcontactError("");
  };
  const validate = () => {
    let err = false;

    const firstNameCheck = /^[A-Za-z. ]{3,30}$/;
    const lastNameCheck = /^[A-Za-z. ]{3,30}$/;
    const emailCheck = /^[A_Za-z]{3,}@[A-Za-z]{3,}[.]{1}[AZa-z.]{2,6}/;
    const passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    const contactCheck = /[^a-zA-Z][0-9]{10}$/;

    if (firstNameCheck.test(firstname)) {
      if (err) {
        return firstNameError;
      }
    } else if (firstname.length < 3) {
        err = true;
      setfirstNameError("** Must be at least 3 character long");
    } else {
        err=true;
      setfirstNameError("** Please type letters only");
    }

    if (lastNameCheck.test(lastname)) {
      if (err) {
        return lastNameError;
      }
    } else {
        err=true;
      setlastNameError("** Please type letters only");
    }

    if (emailCheck.test(email)) {
      if (err) {
        return emailError;
      }
    } else {
        err=true;
      setemailError("** Invalid email address");
    }

    if (passwordCheck.test(password)) {
      if (err) {
        return passwordError;
      }
    } else if (password.length < 8) {
        err=true;
      setpasswordError("** Must be 8-16 character long");
    } else {
        err=true;
      setpasswordError("Include one uppercase and special character");
    }

    if (contactCheck.test(contact)) {
      if (err) {
        return contactError;
      }
    } else if (contact.length < 10) {
        err=true;
      setcontactError("Must be at least 10 digits");
    } else {
        err=true;
      setcontactError("Invalid Contact");
    }
    //if the fields are empty
    if (firstname === "") {
        err=true;
      setfirstNameError("Please fill the field");
      
    }

    if (lastname === "") {
        err=true;
      setlastNameError("Please fill the field");
    }

    if (email === "") {
        err=true;
      setemailError("Please fill the field");
    }

    if (password === "") {
        err=true;
      setpasswordError("Please fill the field");
    }

    if (contact === "") {
        err=true;
      setcontactError("Please fill the field");
      
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const error = validate();
    if (!error) {
      const user = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        contact: contact
      };
      setloading(false);
      axios.post("users", user).then(res => {
        console.log(res.data);
        setloading(false);
        setmessage("Registered succesfully!");
        setfirstname("");
        setpassword("");
        setlastname("");
        setemail("");
        setcontact("");
        setTimeout(()=>{
            window.location=("/login");
        }, 2000);
        
      });
    }
  };

  const messageAlert = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else {
      return <p>{message}</p>;
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.bg}>
          <div className={styles.center_div}>
            <h2 className={styles.heading_two}>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.first_name_div}>
                <input
                  onChange={handleFirstName}
                  onKeyDown={handleFirstNameKey}
                  className={styles.first_name}
                  type="text"
                  name="firstName"
                  value={firstname}
                  placeholder="First Name &#42;"
                />
                <span className={styles.first_name_error}>{firstNameError}</span>
              </div>

              <br />
              <div className={styles.last_name_div}>
                <input
                  onChange={handleLastName}
                  onKeyDown={handleLastNameKey}
                  className={styles.last_name}
                  type="text"
                  name="lastName"
                  value={lastname}
                  placeholder="Last Name &#42;"
                />
                <span className={styles.last_name_error}>{lastNameError}</span>
              </div>
              <br />
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
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password &#42;"
                />
                <span className={styles.password_error}>{passwordError}</span>
              </div>
              <br />
              <div className={styles.contact_div}>
                <input
                  onChange={handleContact}
                  onKeyDown={handleContactKey}
                  className={styles.contact}
                  type="text"
                  name="contact"
                  value={contact}
                  placeholder="Contact"
                />
                <span className={styles.contact_error}>{contactError}</span>
              </div>
              <br />
              <div>
                <button type="submit">Register</button>
              </div>
              <div className={styles.message}>{messageAlert()}</div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Register;
