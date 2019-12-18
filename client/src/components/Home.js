import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Home.module.css"
import Footer from "./Footer";
import Javascript_Code from "../images/Javascript_Code.jpg";
import Mernstack from "../images/Mernstack.jpeg";
const Home = () => {
  
    return (
        <div className={styles.wrapper}>
       <div className={styles.containerOne}>
      <div className={styles.textOne}>
        <h1 className={styles.headingOne}> 
        <span className={styles.headingSpan}>Hi</span>
        <span className={styles.headingSpan}>It's me Kishor Rana Chhetri</span> 
        <span className={styles.headingSpan}>Welcome to my website!</span>
        </h1>
        </div> 
        <div className={styles.quote}>
        <q className={styles.quotePara}>Website without visitors is like a ship lost in the horizon.</q>
        <i className={styles.italic}> - Dr. Christopher Dayagdag</i>
        </div>    
      </div>

      <div className={styles.containerTwo}>
      <div className={styles.textTwo}>
        <p className={styles.paraTwo}>This website aims to introduce myself and showcase my skills, knowledge and experience. Moreover, as we know, sharing is caring, it also contains blog on javascript and its frameworks including both front and backend that will help to share knowledge that I have in particular field. I have comment section as well to make it more interactive and to correct myself if there are any errors with reader's feedback.   </p>
        </div>
        <div className={styles.imageTwo}>
            <img src={Javascript_Code} alt="Pic1"/>
        </div>
      </div>

<div className={styles.midsection}>
  <h1 className={styles.midHeading}>Build Full Stack Website with me</h1>
  <p className={styles.midpara}>I can build interactive website that has both frontend and backend. With hands on experience with PHP and wordpress, I have already developed some websites. As there is increasing demand of skilled person in web development. I have prepared myself with the latest technology and tools. Similarly, I now have skills in  MongoDB, Express, React and Node which is in combined called MERN stack. With these skills, I can build full stack interactive website for small businesses to medium businesses. </p>
   <button className={styles.button}><Link className={styles.link} to="/resume">View my Resume</Link></button>
</div>

      <div className={styles.containerThree}>
      <div className={styles.imageThree}>
            <img src={Mernstack} alt="Mernstack"/>
        </div>

      <div className={styles.textThree}>
        <p className={styles.paraThree}>Regarding this website, it is developed using MongoDB, Express, React and Node. I have tried my best to apply best practices that we find in modern websites. It is responsive meaning it is mobile and tablet friendly. All the source codes can be accessed from github repository. </p>
        </div>
      </div>

      <Footer />

      </div> 
    );
  };
  export default Home;
  
  