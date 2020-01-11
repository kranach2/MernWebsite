import React from "react";
import { Link } from "react-router-dom";

import styles from "../css/Rmenu.module.css";

const Rmenu = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
          
          <div className={styles.rmenu}>
      <ul>
        <li>
          <Link onClick={props.handleClick} className={styles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.handleClick} className={styles.link} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={props.handleClick} className={styles.link} to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link onClick={props.handleClick} className={styles.link} to="/resume">
            Resume
          </Link>
        </li>
        
        <li>
          <Link onClick={props.handleClick} className={styles.link} to="/contact">
            Contact
          </Link>
        </li>
        </ul>
        </div>
      </div> 
    </div>
  );
};

export default Rmenu;

