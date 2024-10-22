import { useMediaQuery } from 'react-responsive';
import '../styles/clock.css'
import React, { useEffect, useRef, useState } from 'react';



function Catalog() {
    return (
      <DesktopLayout />    
    )
}



function DesktopLayout() {
    // References to the clock hands and other elements
    const hourRef = useRef(null);
    const minuteRef = useRef(null);
    const secondRef = useRef(null);
    const timeRef = useRef(null);
    const dateRef = useRef(null);

    // This will run once when the component mounts
    useEffect(() => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const scale = (num, in_min, in_max, out_min, out_max) => {
            return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        }

        // Function to update the time and animate the clock hands
        const setTime = () => {
            const time = new Date();
            const month = time.getMonth();
            const day = time.getDay();
            const date = time.getDate();
            const hours = time.getHours();
            const hoursForClock = hours >= 13 ? hours % 12 : hours;
            const minutes = time.getMinutes();
            const seconds = time.getSeconds();
            const ampm = hours >= 12 ? 'PM' : 'AM';

            // Update clock hands using refs
            if (hourRef.current) {
                hourRef.current.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
            }
            if (minuteRef.current) {
                minuteRef.current.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
            }
            if (secondRef.current) {
                secondRef.current.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;
            }

            // Update time and date display using refs
            if (timeRef.current) {
                timeRef.current.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
            }
            if (dateRef.current) {
                dateRef.current.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
            }
        }

        // Initial call to set time
        setTime();
        // Update the time every second
        const interval = setInterval(setTime, 1000);

        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(interval);
        };
    }, []);



    return (
        <div>
            <div className="clock-container">
                <div className="clock">
                    <div className="needle hour" ref={hourRef}></div>
                    <div className="needle minute" ref={minuteRef}></div>
                    <div className="needle second" ref={secondRef}></div>
                    <div className="center-point"></div>
                </div>
              
              {/*
                <div className="time" ref={timeRef}></div>
                <div className="date" ref={dateRef}></div>
              */}
            </div>
        </div>
    );
}

export default Catalog