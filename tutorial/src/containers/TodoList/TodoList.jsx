import { useEffect, useState, useMemo, useCallback } from 'react';
import './TodoList.css';
import Deadline from '../../components/Deadline/Deadline';
import TodoItem from '../../components/TodoItem/TodoItem';
import axios from 'axios'
import AddTodo from '../../components/AddTodo/AddTodo';
import Title from '../../components/Title/Title'



function TodoList() {
	const [ todos, setTodos ] = useState([])

	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/todo/todo-list/')
        .then(response => {
            setTodos(response.data.reverse())
        })
	}, [])


	const deleteTodo = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/todo/todo-list/${id}/` )
        .then(() => {
            const newTodos = todos.filter(e => e.id !== id)
            setTodos(newTodos)
        })
	}

    const addTodoHandler = useCallback((todo) => {
        setTodos(prev => [todo, ...prev])
    }, [])


    const todoListContent = useMemo(() => {
        if (todos.length) {
            return todos.map((todo, i) => {
                return <TodoItem 
                key={todo.id} 
                index={i+1} 
                title={todo.title} 
                content={todo.content} 
                duration={todo.duration} 
                clicked={() => {deleteTodo(todo.id)}} />
            })
        }
        else {
            return null
        }
    }, [todos])

  return (
    <div className='TodoList'>
        <div className='container'>
            {/* <Deadline /> */}
            <Title text='Todo List'/>
            <AddTodo addTodoHandler={addTodoHandler}/>
            <div>
                {todoListContent}
            </div>
        </div>
    </div>
  );
}

export default TodoList;
