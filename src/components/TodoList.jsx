import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import './TodoList.css';
function TodoList() {
    let todos = useSelector(state=>state);

    return (
        <div className="my">
            {todos.map((todo)=>   {
                return <TodoItem key={todos.id} todo={todo}/>;
            })}
        </div>
    )
}

export default TodoList
