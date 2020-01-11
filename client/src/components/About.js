import React from "react";
import Footer from "./Footer";
import styles from "../css/About.module.css";
import kishor_pic from "../images/kishor_pic.JPG";
const About = () => {
  return (
    <div className={styles.wrapper}>
      
      <div className={styles.container_one}>
        <div className={styles.text_one}>
          <h1 className={styles.heading_one}>About Myself</h1>
          <p className={styles.para_one}>My Passion and Personality</p>
        </div>
      </div>

      <div className={styles.container_two}>
        <div className={styles.text_two}>
          <h1 className={styles.heading_two}>
            Some interesting facts about myself
          </h1>
          <p className={styles.para_two}>
            I am originally from Kathmandu, capital of Nepal. To pursue higher
            education, came to Perth, WA in 2013. In fact, I came to Edith Cowan
            University to study biomedical science as I had a science background
            in high school. But I was destined to something else. After few days
            of arrival, I changed my mind to make my career on IT as I was
            always interested in computer technology since childhood. I
            completed Bahelor's of Information Technology from ECU followed by
            professional year program from National Institute of Technology. I
            love watching movies and reading novels. My favourite visited place
            is New York City and favourite dish is MOMO (Nepalese dumpling).
            Meditation in the weekend helps me kick start my day followed by
            cycling. Playing video games with friends and learning new topics in
            free time makes me feel good. I love helping people who are in need
            which I think is the best traits of mine. Last but not least, always
            ready for long drive.
          </p>
        </div>
        <div className={styles.image_two}>
          <img src={kishor_pic} alt=" Profile of Kishor" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
