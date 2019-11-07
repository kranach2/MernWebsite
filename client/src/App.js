import React, { useState } from "react";
import styles from "./css/App.module.css";

function App() {
  const [day, setDay] = useState("00");
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");
  const [message, setMessage] = useState("");
  const targetDate = new Date("Nov 14, 2019 15:55:25").getTime();
  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;
    setDay(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
    setHour(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinute(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
    setSecond(Math.floor((timeLeft % (1000 * 60)) / 1000));
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
      <header className="App-header"> </header>
      <h1>Coming soon!!!</h1>
      <h2>www.ct-webtech.com</h2>
      <div className={styles.time}>
        <div className={styles.group}>
          <span className={styles.day}>{day}</span>
          &nbsp;{" "}
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>day</span>{" "}
          &nbsp;
          <span className={styles.hour}>{hour}</span> &nbsp;
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>hour</span>{" "}
          &nbsp;
          <span className={styles.minute}>{minute}</span> &nbsp;{" "}
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>minutes</span>{" "}
          &nbsp;
          <span className={styles.second}>{second}</span>&nbsp;{" "}
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>second</span>
        </div>
      </div>
      <h1> {message} </h1>{" "}
    </div>
    <div>
      <p>&copy; 2019 <i>kishor Rana Chhetri </i></p>
    </div>
  );
}

export default App;
