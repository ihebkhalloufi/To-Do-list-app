import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTodo,  } from '../redux/actions';
import './TodoItem.css';
function TodoItem({ todo }) {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    let dispatch = useDispatch();

    return (
        <div>
            <div className="center">
                <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
                <div className="col">
                    {editable ?
                        <input type="text" className="form"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}

                        />
                        :
                        <h4>{todo.name}</h4>}
                </div>
                
                <Button className="danger "
                    onClick={() => dispatch(deleteTodo(todo.id))}
                >Delete</Button>
            </div>
        </div>
    )
}

export default TodoItem
