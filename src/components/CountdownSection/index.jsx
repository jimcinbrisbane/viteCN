import React, { useState, useEffect } from 'react';
import './index.css';

const CountdownSection = ({ heading }) => { // Destructure heading from props
    const calculateTimeLeft = () => {
    const difference = +new Date('2024-07-12T18:00:00+10:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  if (timerComponents.length === 0) {
    return null; // Hide component when the event is live
  }

  return (
    <div className="countdown">
      {timerComponents}
      <b>{heading}</b>

    </div>
  );
};

export default CountdownSection;
