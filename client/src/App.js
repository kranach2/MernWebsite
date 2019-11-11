import React, { useState } from "react";
import styles from "./css/App.module.css";

function App() {
  const [loader, setloader] = useState(true);
  const [day, setDay] = useState("00");
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");
  const [message, setMessage] = useState("");
  const targetDate = new Date("Nov 14, 2019 15:55:25").getTime();

  function onload() {
    if (loader) {
      return <div className={styles.loading}></div>;
    } else {
      return "";
    }
  }
  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;
    setDay(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
    setHour(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinute(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
    setSecond(Math.floor((timeLeft % (1000 * 60)) / 1000));
    setloader(false);
    if (timeLeft < 0) {
      clearInterval(countdown);
      setDay("00");
      setHour("00");
      setMinute("00");
      setSecond("00");
      setMessage("Welcome aboard");
    }
  }, 1000);

  return (
    <div className="App">
      {onload()}
      <header className="App-header">
        <h1>Coming soon!!!</h1>
        <h2>www.ct-webtech.com</h2>
        <div className={styles.time}>
          <div className={styles.group}>
            <ul>
            <li> <span className={styles.day}>{day}</span>
            &nbsp;
            <span className={ styles.textday}>
              day
            </span>{" "} &nbsp; </li> 

          <li>
            <span className={styles.hour}>{hour}</span>&nbsp;
            <span className={ styles.texthour}>
              hour
            </span>{" "} &nbsp; </li>
            
            <li>
            <span className={styles.minute}>{minute}</span> &nbsp;
            <span className={ styles.textminute}>
              minute
            </span>{" "} &nbsp;
            </li>
            <li>
            <span className={styles.second}>{second}</span>&nbsp;{" "}
            <span className={ styles.textsecond}>second</span>
            </li>
            </ul>
          </div>
        </div>
        <h2> {message} </h2>{" "}
        <div className={styles.footer}>
          <p>
            &copy; 2019<i>Kishor Rana Chhetri</i>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
