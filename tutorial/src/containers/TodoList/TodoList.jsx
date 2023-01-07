import { useEffect, useState } from 'react';
import './TodoList.css';
import Deadline from '../../components/Deadline/Deadline';
import TodoItem from '../../components/TodoItem/TodoItem';
import axios from 'axios'
import AddTodo from '../../components/AddTodo/AddTodo';



function TodoList() {
	const [ todos, setTodos ] = useState([])

	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/todo/todo-list/')
        .then(response => {
            setTodos(response.data)
        })
	}, [])


	const deleteTodo = (id) => {
		const newTodos = todos.filter(e => e.id !== id)
		setTodos(newTodos)
	}

    const addTodoHandler = (todo) => {
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

  return (
    <div className='TodoList'>
        <div className='container'>
            <Deadline />
            <AddTodo addTodoHandler={addTodoHandler}/>
            <div>
                {todos.map((todo, i) => {
                    return <TodoItem 
                    key={todo.id} 
                    index={i+1} 
                    title={todo.title} 
                    content={todo.content} 
                    clicked={() => {deleteTodo(todo.id)}} />
                })}
            </div>
        </div>
    </div>
  );
}

export default TodoList;
