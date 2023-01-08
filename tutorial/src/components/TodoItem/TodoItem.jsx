import { useEffect } from 'react'
import './TodoItem.css'
import React from 'react'


function TodoItem(props) {

    const [duration, setDuration] = React.useState(100);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setDuration(prev => {
                const new_value = prev - 1
                if (new_value === 0) {
                    clearInterval(interval)
                }
                return new_value
            })
        }, 1000);
        // return () => {
        //     clearInterval(interval)
        // }
    }, [])


    return (
        <div className='todo-item' onClick={props.clicked}>
            <div className='todo-index'>{props.index}</div>
            <div className='todo-text'>
                <div className='todo-title'>{props.title}</div>
                <div className='todo-content'>{props.content}</div>
            </div>
            <div className='todo-duration'>{duration}</div>
        </div>
    )
}




export default TodoItem