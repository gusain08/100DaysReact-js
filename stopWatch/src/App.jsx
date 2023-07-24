import React, { useEffect, useState } from 'react'
const App = () => {
  const [time,settime] = useState(0);
  const [running,setRunning] = useState(0);
  useEffect(()=>{
    let interval;
      if(running){
        interval = setInterval(()=>{
          settime((prevTime)=>prevTime + 10)
        },10);
      }else if(!running){
        clearInterval(interval);
      }
      return () =>clearInterval(interval);
  },[running])
  return (
    <>
    <div className="App">
      <h1>StopWatch</h1>
    <span>{("0" + Math.floor(time / 60000) % 60).slice(-2)}:</span>
    <span>{("0" + Math.floor(time / 1000) % 60).slice(-2)}:</span>
    <span>{("0" + Math.floor(time / 10) % 600).slice(-2)}</span>
    <br />
      {
        running ? (
          <button onClick={()=>setRunning(false)}> Stop </button>
        ):(
          <button onClick={()=>setRunning(true)}>
          Start
        </button>
        )
      }



  
       
        <button onClick={()=>settime(0)}> 
          Reset
        </button>
    </div>
    </>
  )
}

export default App