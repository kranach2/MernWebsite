import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import styles from "../css/Blog.module.css";

const Blog = () => {
  const [comment, setcomment] = useState([]);

  useEffect(() => {
    axios
      .get("comments")
      .then(response => {
        setcomment(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.blogSection}>
          <h1 className={styles.heading}>Arrow Function </h1>
          <p className={styles.para}>
            Arrow function is ES6 feature which is replacement of regular
            function. It's syntax is simple and easy to comprehend.
            <pre>
            Syntax: () => &#123;

            &#125;
</pre>
        It always returns value.
          </p>
        </div>
      </div>
      
      <div className={styles.comments}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>Comments</th>
            </tr>
          </thead>

          {comment.map(comments => {
            return (
              <tbody key={comments._id}>
                <tr>
                  <td className={styles.tableData}>  {comments.comment} &nbsp; &nbsp; &nbsp;<span className={styles.span}>-commented on: {moment(comments.commentDate.slice(0,10)).format("DD/MM/YY")}</span></td>
            
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
     <div className={styles.buttonDiv}>
     <button className={styles.button}><Link className={styles.link} to="/add-comment">Add Comment</Link></button>
     </div>

      <Footer />
    </div>
  );
};

export default Blog;
