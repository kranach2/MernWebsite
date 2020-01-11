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
        <div className={styles.blog_section}>
          <h1 className={styles.heading}>Arrow Function </h1>
          <p className={styles.para}>
            Arrow function is ES6 feature which is replacement of regular
            function. It's syntax is simple and easy to comprehend.
          <br/><br/>
            Syntax: <b>(&nbsp;)&nbsp; => &nbsp; &#123;
            &nbsp; statement
            &nbsp; &#125;</b>
            <br/><br/>
            If we have only one parameter, the parantheses are optional. We can simply write: 
            <br/>
            <b> parameter => &nbsp; &#123; statements &nbsp; &#125;</b>
            <br/> <br/>
            If we are returning an expression, there is no need of curly brackets.
            <br/>
            <b>parameter => expression</b>
            <br/><br/>
            Let's take an example with just one parameter:
            <br/>
            <b>const sum = number => number + 10;</b>
            <br/><br/>
            Since, we have just one parameter, we have omitted the parantheses and we are returning value of number * 10, curly brackets around the expression have also been removed.
            <br/>
            If we call the above function, we will get the following results.
            <br/>
            <b> sum(5); // 15</b> <br/>
            <b>sum(10); // 20 </b> <br/>
            <b>sum(15); // 25 </b>
<br/>
        
          </p>
        </div>
      </div>
      
      <div className={styles.comments}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.table_header}>Comments</th>
            </tr>
          </thead>

          {comment.map(comments => {
            return (
              <tbody key={comments._id}>
                <tr>
                  <td className={styles.table_data}>  {comments.comment} 
                  <br/>
                  <span className={styles.span}>-commented by: {comments.name}</span> &nbsp;
                  <span className={styles.span}>on: {moment(comments.commentDate.slice(0,10)).format("DD/MM/YY")}</span>
                  
                  </td>
            
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <div className={styles.links}>
        <p className={styles.link_para}>To comment:</p>
        <Link className={styles.link_one} to="/register">
          Register
        </Link>{" "}
        or &nbsp;
        <Link className={styles.link_two} to="/login">
          Log In
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
