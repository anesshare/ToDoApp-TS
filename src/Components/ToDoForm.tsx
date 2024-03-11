import React, { useState } from "react";

const ToDoForm = (props: { addTodo: Function }) => {
  const [description, setDescription] = useState('');
  const [assigned, setAssigned] = useState('');

  const submitToDo = () => {
    if (assigned !== '' && description !== '') {
      props.addTodo(description, assigned);
      setDescription('');
      setAssigned('');
    }
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            onChange={(e) => setAssigned(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Assigned"
            value={assigned}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            onChange={(event) => setDescription(event.target.value)}
            className="form-control"
            placeholder="Description"
            rows={3}
            value={description}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary mt-5"
          onClick={submitToDo}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
