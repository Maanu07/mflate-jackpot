import React, { useEffect, useState, useRef } from "react";

function Timer() {
  let [day, setDay] = useState(0);
  let [minute, setMinute] = useState(0);
  let [hour, setHour] = useState(0);
  let [second, setSecond] = useState(0);

  const abc = () => {
    var future = Date.parse("nov 13, 2022 19:28:00");
    var now = new Date();
    var diff = future - now;
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor(diff / (1000 * 60 * 60));
    var mins = Math.floor(diff / (1000 * 60));
    var secs = Math.floor(diff / 1000);

    hour = hours - days * 24;
    if (hour <= 9) {
      hour = "0" + hour;
      setHour(hour);
    } else {
      setHour(hour);
    }

    secs = secs - mins * 60;
    if (secs <= 9) {
      secs = "0" + secs;
      setSecond(secs);
    } else {
      setSecond(secs);
    }

    mins = mins - hours * 60;
    if (mins <= 9) {
      mins = "0" + mins;
      setMinute(mins);
    } else {
      setMinute(mins);
    }
  };

  useEffect(() => {
    setInterval(() => {
      abc();
    }, 1000);
  });

  return <h3>{`${hour}:${minute}:${second}`}</h3>;
}
export default Timer;
