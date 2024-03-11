// ToDoTable.js
import React from 'react';
import ToDoRow from './TodoRow';
import TodoModel from '../Models/TodoModel'

const ToDoTable = (props:{todos:TodoModel[],deleteTodo:Function}) => {
    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(todo => (
                    <ToDoRow key={todo.rowNumber} rowNumber={todo.rowNumber} rowDescription={todo.rowDescription} rowAssigned={todo.rowAssigned} deleteTodo={props.deleteTodo} />
                ))}
            </tbody>
        </table>
    );
};

export default ToDoTable;
