import React,{useState,useEffect} from 'react'
import Display from './Display.js';
const App = () => {
  const endTime = new Date('December 29, 2021 00:00:00').getTime();// returns time in milliseconds 
  const [currentTime,setcurrentTime]=useState(new Date().getTime());// gets time in milliseconds
  const gap = endTime - currentTime; // value will be in milliseconds
  const seconds = 1000;// in milliseconds
  const minutes = seconds * 60;
  const hours =  minutes  * 60;
  const days =hours * 60;
  
  const remainingDays = Math.floor(gap/days);
  const remainingHours = Math.floor((gap% days) / hours);
  const remainingMinutes = Math.floor((gap% hours) / minutes);
  const remainingSeconds = Math.floor((gap% minutes) /seconds);
  useEffect(()=> {
    setTimeout(()=>setcurrentTime(new Date().getTime()),1000)
  if (gap===0)
     alert("Offer Ended");
},[currentTime])
  return (
    <div>
       <center>
         <Display days={remainingDays} hours={remainingHours} minutes={remainingMinutes} seconds={remainingSeconds} />
       </center>
    </div>
  )
}

export default App
