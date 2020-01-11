import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Home.module.css"
import Footer from "./Footer";
import javascript_code from "../images/javascript code.jpg";
import mernstack from "../images/mernstack.jpeg";
const Home = () => {
  
    return (
        <div className={styles.wrapper}>
       <div className={styles.container_one}>
      <div className={styles.text_one}>
        <h1 className={styles.heading_one}> 
        <span className={styles.heading_span}>Hi</span>
        <span className={styles.heading_span}>It's me Kishor Rana Chhetri</span> 
        <span className={styles.heading_span}>Welcome to my website!</span>
        </h1>
        </div> 
        <div className={styles.quote}>
        <q className={styles.quote_para}>Website without visitors is like a ship lost in the horizon.</q>
        <i className={styles.italic}> - Dr. Christopher Dayagdag</i>
        </div>    
      </div>

      <div className={styles.container_two}>
      <div className={styles.text_two}>
        <p className={styles.para_two}>This website aims to introduce myself and showcase my skills, knowledge and experience. Moreover, as we know, sharing is caring, it also contains blog on javascript and its frameworks including both front and backend. I will post blogs on different topics based on my knowledge and experience. I have comment section as well to make it more interactive and readers can express their opinions regarding particular topics.</p>
        </div>
        <div className={styles.image_two}>
            <img src={javascript_code} alt="JavasScript Code" />
        </div>
      </div>

<div className={styles.midsection}>
  <h1 className={styles.mid_heading}>Build Full Stack Website with me</h1>
  <p className={styles.mid_para}>I can build interactive website that has both frontend and backend. With hands on experience with PHP and wordpress, I have already developed some websites. As there is increasing demand of skilled person in web development, I have prepared myself with the latest technology and tools. Similarly, I now have skills in  MongoDB, Express, React and Node which is in combined called MERN stack. With these skills, I can build full stack interactive website for small businesses to medium businesses. </p>
   <button className={styles.button}><Link className={styles.link} to="/resume">View my Resume</Link></button>
</div>

      <div className={styles.container_three}>
      <div className={styles.image_three}>
            <img src={mernstack} alt="Mernstack"/>
        </div>

      <div className={styles.text_three}>
        <p className={styles.para_three}>Regarding this website, it is developed using MongoDB, Express, React and Node. I have tried my best to apply best practices that we find in modern websites. It is responsive meaning it is mobile and tablet friendly. All the source codes can be accessed from github repository. </p>
        </div>
      </div>

      <Footer />

      </div> 
    );
  };
  export default Home;
  
  