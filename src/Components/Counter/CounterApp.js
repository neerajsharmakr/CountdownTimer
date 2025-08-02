import React, { useEffect, useRef, useState } from "react";
import "./counter.css";

const CounterApp = () => {
  const [time, setTime] = useState(0);
  const [isActive, setActive] = useState(false);
  const [isPause, setisPause] = useState(false);

  const refElement = useRef(null);
  const handleInput = (e) => {
    setTime(parseInt(e.target.value) * 60);
  };

  const formateTime = () => {
    const min = String(Math.floor(time / 60)).padStart(2, "0");
    const sec = String(time % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  const handleStart = () => {
    setActive(true);
    setisPause(false);
  };

  useEffect(() => {
    if (isActive && !isPause && time > 0) {
      refElement.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(refElement.current);
      setActive(false);
      alert("time is up");
    }
    return () => clearInterval(refElement.current);
  }, [isActive, isPause, time]);

  const handlePause = () => {
    setisPause(!isPause);
  };
  const handleReset = () => {
    clearInterval(refElement.current);
    setActive(false);
    setisPause(false);
    setTime(0);
  };
  return (
    <>
      <div className="counter-Timer">
        <h1>CountDown Timer</h1>
        <div className="timer-display">
          <input
            type="number"
            placeholder="Enter Time in Minut"
            onChange={handleInput}
          />
          <div>{formateTime()}</div>
        </div>

        <div className="btn-control">
          <button onClick={handleStart} disabled={isActive && !isPause}>
            Start
          </button>
          <button onClick={handlePause} disabled={!isActive}>
            {isPause ? "Resume" : "Pause"}
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default CounterApp;

// import React, { useEffect, useRef, useState } from "react";
// import "./counter.css";

// const CounterApp = () => {
//   const [istime, setisTime] = useState(0);
//   const [start, setStart] = useState(false);
//   const [pause, setpause] = useState(false);

//   const elementreff = useRef(null);

//   const handleInput = (e) => {
//     setisTime(parseInt(e.target.value) * 60);
//   };

//   const TimerFormater = () => {
//     const min = String(Math.floor(istime / 60)).padStart(2, "0");
//     const sec = String(istime % 60).padStart(2, "0");

//     return `${min}:${sec}`;
//   };

//   const handlestart = () => {
//     setStart(true);
//     setpause(false);
//   };
//   useEffect(() => {
//     if (start && !pause && istime > 0) {
//       elementreff.current = setInterval(() => {
//         setisTime((prev) => prev - 1);
//       }, 1000);
//     } else if (istime === 0) {
//       clearInterval(elementreff.current);
//       setStart(false);
//       alert("time is up");
//     }
//     return () => clearInterval(elementreff.current);
//   }, [start, pause, istime]);

//   const handlePause = () => {
//     setpause(!pause);
//   };

//   const handleReset = () => {
//     clearInterval(elementreff.current);
//     setStart(false);
//     setpause(false);
//     setisTime(false);
//   };
//   return (
//     <>
//       <div className="counter-Timer">
//         <h1>CountDown Timer</h1>
//         <div className="timer-display">
//           <input
//             type="number"
//             placeholder="Enter time in minuts"
//             onChange={handleInput}
//           />
//           <div>{TimerFormater()}</div>
//         </div>
//         <div className="btn-control">
//           <button onClick={handlestart} disabled={start && pause}>
//             Start
//           </button>
//           <button onClick={handlePause} disabled={!start}>
//             {pause ? "Resume" : "Pause"}
//           </button>
//           <button onClick={handleReset}>Reset</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CounterApp;
