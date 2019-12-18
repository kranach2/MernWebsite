import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
      <div className={styles.links}>
        <p className={styles.linkPara}>To comment:</p>
        <Link className={styles.linkOne} to="/register">
          Register
        </Link>{" "}
        or &nbsp;
        <Link className={styles.linkTwo} to="/login">
          Log In
        </Link>
      </div>
</div>
      <Footer />
    </div>
  );
};

export default Comment;
