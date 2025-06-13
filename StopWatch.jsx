import React, {useState,useEffect,useRef} from 'react';

export default function StopWatch(){

    const [isRunning,setRunning] = useState(false);
    const [elapsed,setElapsed] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsed(Date.now() - startTimeRef.current);
            },10);
        }

        return() => {
            clearInterval(intervalIdRef.current);
        }
    },[isRunning]);

    function start(){
        setRunning(true);
        startTimeRef.current = Date.now() - elapsed;
    }

    function stop(){
        setRunning(false);
    }

    function reset(){
        setElapsed(0);
        setRunning(false);
    }

    function formatTime(){
        let hours = Math.floor(elapsed / (1000 * 60 * 60));
        let minutes = Math.floor(elapsed / (1000 * 60)%60);
        let seconds= Math.floor(elapsed / (1000)%60);
        let milliseconds = Math.floor((elapsed % 1000)/10);

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        milliseconds = String(milliseconds).padStart(2,"0");
        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return(<>
        <div className="StopWatch">
            <div className='display'>{formatTime()}</div>
            <div className='controls'>
                <button onClick={start} className="Start">Start</button>
                <button onClick={stop} className="Stop">Stop</button>
                <button onClick={reset} className="Reset">Reset</button>
            </div>
        </div>
    </>);
}