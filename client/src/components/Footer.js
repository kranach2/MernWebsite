import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.content_section}>
        <p className={styles.para}>
          {" "}
          &copy; 2019 Kishor Rana Chhetri. All rights reserved. Full Stack
          Developer
        </p>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link className={styles.link} to="/terms-of-service">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.social_icon}>
          <a
            className={styles.social_link}
            href="https://www.facebook.com/kkeysor.rana"
            target="_self"
          >
            <i
              style={{ color: "rgb(59, 89, 152)" }}
              className="fab fa-facebook"
            ></i>
          </a>
          <a className={styles.social_link} href="https://www.instagram.com/keysor19/"
            target="_self">
            <i
              style={{ color: "rgb(247,119,55)" }}
              className="fab fa-instagram"
            ></i>
          </a>
          <a className={styles.social_link} href="https://www.linkedin.com/in/kishor-rana-chhetri/"
            target="_self">
            <i
              style={{ color: "rgb(40,103,178)" }}
              className="fab fa-linkedin"
            ></i>
          </a>
        </div>
      </div>
      </div>

    </div>
  );
};
export default Footer;
