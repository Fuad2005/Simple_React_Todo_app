import './AddTodo.css'
import React from 'react'
import axios from 'axios'


function AddTodo(props) {
    
    const [ title, setTitle ] = React.useState('')
    const [ content, setContent] = React.useState('')

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }
    const descChangeHandler = (e) => {
        setContent(e.target.value)
    }

    const submitHandler = () => {
        const new_todo = {
            id: Math.random(),
            title: title,
            content: content
        }

        axios.post('http://127.0.0.1:8000/api/todo/todo-list/', new_todo)
        .then(response => {
            console.log(response)
        })

        props.addTodoHandler(new_todo)
        setTitle('')
        setContent('')
    }

    return (
        <div className="add-todo">
            <input value={title} onChange={titleChangeHandler} className='title-input' type="text" placeholder="Header"/>
            <input value={content} onChange={descChangeHandler} className='desc-input' type="text" placeholder="Content"/>
            <button onClick={submitHandler} >Add</button>
        </div>
    )
}



export default AddTodo