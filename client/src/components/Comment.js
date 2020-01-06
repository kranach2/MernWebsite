import React from "react";
import { useState } from "react";
import Footer from "./Footer";
import styles from "../css/Comment.module.css";

const Comment = () => {
  const [comment, setcomment] = useState("Add comments....");
const handleComment = (e) =>{
    setcomment(e.target.value);
}
const handleSubmit= (e)=>{
    e.preventDefault();
}
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
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
      
</div>
      <Footer />
    </div>
  );
};

export default Comment;
