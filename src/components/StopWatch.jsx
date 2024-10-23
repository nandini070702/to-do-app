import React, { useState } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [intervalId, setIntervalId] = useState(null);


  //const startTimer = () => setRunning(true);
  //const stopTimer = () => setRunning(false);
  //const resetTimer = () => {
  const updateTimer = () => {
    setTime(prevTime => {
      const newSeconds = prevTime.seconds + 1;
      const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
      const newHours = prevTime.hours + Math.floor(newMinutes / 60);
      return {
        hours: newHours % 24,
        minutes: newMinutes % 60,
        seconds: newSeconds % 60
      };
    });
  };

  // Start Timer
  const startTimer = () => {
    if (!intervalId) {
      const id = setInterval(updateTimer, 1000);
      setIntervalId(id);
    }
  };

  // Stop Timer
  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  // Reset Timer
  const resetTimer = () => {
    stopTimer();
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };



//setRunning(null);
//setTime({ hours: 0, minutes: 0, seconds: 0 });

//useEffect(() => {
//let interval;
//if (running) {
//interval = setInterval(() => {
//setTime(prevTime => {
//const { hours, minutes, seconds } = prevTime;
//if (seconds < 59) {
//return { ...prevTime, seconds: seconds + 1 };
//} else if (minutes < 59) {
//return { hours, minutes: minutes + 1, seconds: 0 };
// } else {
// return { hours: hours + 1, minutes: 0, seconds: 0 };
//}
//});
// }, 1000);
//} else {
//clearInterval(interval);
// }
//return () => clearInterval(interval);
//}, [running]);

// const Stopwatch = ({ time, startTimer, stopTimer, resetTimer }) => {
return (
  <div style={{ textAlign: 'center' }}>
    <h1>Stopwatch</h1>
   <div style={{ fontSize: '2rem' }}>
      {`${time.hours.toString().padStart(2, '0')}:${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}
    </div>
    <button onClick={startTimer}>Start</button>
    <button onClick={stopTimer}>Stop</button>
    <button onClick={resetTimer}>Reset</button>
  </div>
);
};

export default StopWatch;