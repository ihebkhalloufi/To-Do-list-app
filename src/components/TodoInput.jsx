import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import {v1 as uuid} from 'uuid';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './TodoInput.css';
function TodoInput() {
    let [name, setName] = useState();
    let dispatch = useDispatch();
    return (
        <div>
            <div className="row ">
                <input className='input'
                
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type="text" />
                <Button
                
                onClick={()=>{
                       dispatch(  addTodo({
                        id: uuid(),
                        name: name
                    }));
                        setName('');
                    }}
                className=" primary ">Add</Button>
            </div>
        </div>
    )
}

export default TodoInput
