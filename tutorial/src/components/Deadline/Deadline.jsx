import './Deadline.css'
import { useState, useEffect } from 'react'

function Deadline(props) {
    const [dayCount, setDayCount] = useState(0)
    const [hourCount, setHourCount] = useState(0)
    
    // console.log('component rendered')
    // useEffect(() => {
    //     console.log('day count changed')
    // }, [dayCount])
    // useEffect(() => {
    //     console.log('hour count changed')
    // }, [hourCount])
    
    const incDays = () => {
        setDayCount((prevState) => prevState + 1)
    }

    const decDays = () => {
        setDayCount((prevState) => prevState - 1)
    }
    const incHours = () => {
        setHourCount((prevState) => prevState + 1)
    }

    const decHours = () => {
        setHourCount((prevState) => prevState - 1)
    }
    
    return(
        <div className="deadline">
            <div className='times'>
            <div className='days'>Days: {dayCount}</div>
            <div className='hours'>Hours: {hourCount}</div>

            </div>
            <div className="controls">
                <button className="dec" onClick={decDays} >-</button>
                <button className="inc" onClick={incDays} >+</button>
            </div>
            <div className="controls">
                <button className="dec" onClick={decHours} >-</button>
                <button className="inc" onClick={incHours} >+</button>
            </div>
        </div>
    )
}


export default Deadline