import React, { useState } from 'react';
import StopWatch from './components/StopWatch'

function App() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [intervalId,setIntervalId] = useState(null);

  // Function to update time by 1 second
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

  return (
    <div className="App">
      {/* <h1>Stopwatch</h1>
      <div>
        <span>{String(time.hours).padStart(2, '0')}:</span>
        <span>{String(time.minutes).padStart(2, '0')}:</span>
        <span>{String(time.seconds).padStart(2, '0')}</span>
      </div>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div> */}
      <StopWatch
      time={time} 
      startTimer={startTimer}
      stopTimer={stopTimer}
      resetTimer={resetTimer}
      
      
      />
    </div>
  );
}

export default App;
