import React from 'react'
import Footer from "./Footer";
import styles from "../css/PrivacyPolicy.module.css";
 function PrivacyPolicy() {
    return (
        <div className={styles.wrapper}>
        <div className={styles.container}>
            <h1 className={styles.heading_one}>Privacy Policy</h1>
            <div className={styles.paragraphs}>
            <p className={styles.para}><i style={{ color: "#8395a7" }}     className="fas fa-hand-point-right"></i> This website - www.iamkishor.info (www.kishorranachhetri.herokuapp.com) is purely personal and not-for-profit website that respects your right to privacy and is committed to safegaurding the privacy of our website visitors. This policy sets out how we collect and treat your personal information (information that we hold which is identifiable as being about you).</p>
           <p className={styles.para}><i style={{ color: "#8395a7" }} className="fas fa-hand-point-right"></i> By using this site, you agree to the privacy policy of this website.</p>
           <p className={styles.para}><i style={{ color: "#8395a7" }} className="fas fa-hand-point-right"></i> This website recieves and stores personal information you enter onto our website that has been provided while registering.</p>
           <p className={styles.para}><i style={{ color: "#8395a7" }} className="fas fa-hand-point-right"></i> You may provide basic information such as full name, email address and contact during registration. The registration is just to become a member and comment on blogs.  </p>
           <p className={styles.para}><i style={{ color: "#8395a7" }} className="fas fa-hand-point-right"></i> We do not send you advertisements, promotions or third party offers. Meanwhile, notification about new blogs, reply from other users on your comments that you made on the related blog, newsletters if there is any can be send in your email address. But if you are not interested or no longer want to recieve those emails, you can unsubscribe it at any time.  </p>
           <p className={styles.para}><i style={{ color: "#8395a7" }} className="fas fa-hand-point-right"></i> We do not share or sell your personal information with third parties or other vendors whatsoever.</p>
           <p className={styles.para}><i style={{ color: "#8395a7" }} className="fas fa-hand-point-right"></i> Until now, this site is not using the cookies. Cookies are packets of data that may include an anonymous unique identifier. These are sent from website to browser and will be stored in the computer that helps to track user's activities.</p>
           <p className={styles.para}><i style={{ color: "#8395a7" }} className="fas fa-hand-point-right"></i> Regarding security, no system is 100% secure. The information stored in our database can be hacked or breached by hackers or other malicious activities. So, we cannot gurantee 100% safety of your personal information. Meantime, we do our best to apply best practices and put robust security in place.   
           </p>
           <p className={styles.para}><i style={{ color: "#8395a7" }} className="fas fa-hand-point-right"></i> If you have any questions, please feel free to contact us.</p>
           </div>
        </div>
        <Footer />
        </div>
        )
}
export default PrivacyPolicy;