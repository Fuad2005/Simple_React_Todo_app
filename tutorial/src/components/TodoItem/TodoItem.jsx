import { useEffect } from 'react'
import './TodoItem.css'


function TodoItem(props) {

    return (
        <div className='todo-item' onClick={props.clicked}>
            <div className='todo-index'>{props.index}</div>
            <div className='todo-text'>
            <div className='todo-title'>{props.title}</div>
            <div className='todo-content'>{props.content}</div>
            </div>
        </div>
    )
}




export default TodoItem