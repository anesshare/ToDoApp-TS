import React from 'react';
import './App.css';
import ToDoForm from './Components/ToDoForm';
import ToDoTable from './Components/ToDoTable';
import TodoModel from './Models/TodoModel';
import { useState } from 'react';

function App() {
 const[showAddForm,setShowAddForm]= useState(false);
 const [todos, setTodos] = useState<TodoModel[]>([
  new TodoModel(1, 'Feed dog', 'User one'),
  new TodoModel(2, 'WaterPlants', 'User two'),
  new TodoModel(3, 'Make dinner', 'User one'),
]);
const addTodo = (description: string, assigned: string) => {
  if (todos.length > 0) {
    const newTodo: TodoModel = { rowNumber: todos.length + 1, rowDescription: description, rowAssigned: assigned };
    
    setTodos((prevTodos: TodoModel[]) => [...prevTodos, newTodo]);
    console.log(todos);
  }
};
const deleteTodo = (deleteRowNumber:number) =>{
let filtered = todos.filter(function(value) {return value.rowNumber !== deleteRowNumber});
setTodos(filtered);
}
  return (
    <div  className='mt-5 container'>
     <div className="card">
      <div className="card-header">
        Your todos
      </div>
      <div className="card-body">
      <ToDoTable todos={todos} deleteTodo={deleteTodo}/>
       <button onClick={()=>setShowAddForm(!showAddForm)} className='btn btn-primary' >{showAddForm ? "Close New Todo" : "Add to do"}</button>
       {showAddForm && 
       <ToDoForm addTodo={addTodo}/>}
       
      </div>
     </div>
    </div>
  );
}

export default App;
