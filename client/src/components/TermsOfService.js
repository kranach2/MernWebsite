import React from 'react';
import Footer from "./Footer";
import styles from "../css/TermsOfService.module.css";

const TermsOfService = () => {
    return (
        <div className={styles.wrapper}>
        <div className={styles.container}>
          
        <h1 className={styles.heading_one}>Terms of Service</h1>
            <div className={styles.paragraphs}>
            <p className={styles.para}><i style={{ color: "#8395a7" }}     className="fas fa-hand-point-right"></i> Please read these Terms of Service carefully before using the
www.iamkishor.info website. These Terms apply to all visitors, users and others who access or use the Service.</p>
           <p className={styles.para}><i style={{ color: "#8395a7" }} className="fas fa-hand-point-right"></i> By accessing or using the Service you agree to be bound by these Terms. If you disagree
with any part of the terms then you may not access the Service.</p>
           <p className={styles.para}><i style={{ color: "#8395a7" }} className="fas fa-hand-point-right"></i> We may terminate or suspend access to our Service immediately, without prior notice or liability, for
any reason whatsoever, including without limitation if you breach the Terms</p>
           <p className={styles.para}><i style={{ color: "#8395a7" }} className="fas fa-hand-point-right"></i> This website allows you to post comments, view blogs and other contents. The images are copyrighted and owned by us. It cannot be used, shared or modified without permission.</p>
           <p className={styles.para}><i style={{ color: "#8395a7" }} className="fas fa-hand-point-right"></i> We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
revision is material we will try to provide at least 30 days' notice prior to any new terms
taking effect. What constitutes a material change will be determined at our sole discretion.</p>
           <p className={styles.para}><i style={{ color: "#8395a7" }} className="fas fa-hand-point-right"></i> If you have any questions about these Terms, please contact us.</p>
           
           </div> 
        </div>
        <Footer />
        </div>
    )
}

export default TermsOfService;