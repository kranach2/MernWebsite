import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from "../css/Navbar.module.css";
import pic from "../images/logo.png";

const Navbar = () => {
  const [change, setchange] = useState(false);
  const handleClick = ()=>{
    setchange(!change);
    console.log(!change);
    }
  return (
      <div className={styles.parent}>
    <div className={styles.navbar}>
        <div>
      <Link to="/">
        <img className={styles.logo} src={pic} alt="logo" />
      </Link>
      </div>
      <div className={styles.menu}>
      <ul>
        <li>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/resume">
            Resume
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/contact">
            Contact
          </Link>
        </li>
        <li>  
          <Link onClick={handleClick} className={styles.link } to={change ?  ""  : "/rmenu" } >
          <i className= {change ?  "fas fa-times" :"fas fa-bars"}></i>
          </Link>
        </li>
      </ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
