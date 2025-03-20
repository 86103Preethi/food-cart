import React, { useReducer } from 'react';

const initialState = [
    {id:0,name:'Reading'}
];

const init = (initialState) => {         //can be used or not necessary
  const data = [...initialState,{id:1,name:'Walking'}];
  return data;
}

const TODOS_ACTION = {
    ADD_TASK: 'ADD_TASK',
    DELETE_TASK: 'DELETE_TASK',
    EDIT_TASK: 'EDIT_TASK',
};

const reducer = (state, action) => {
  console.log("action",action);
  console.log("state",state);

   switch (action.type) {
    case TODOS_ACTION.ADD_TASK:
        console.log("adding", state);
        return [...state, { id: state.length + 1, name: action.payload }];
        
    case TODOS_ACTION.DELETE_TASK:
        console.log("deleting", state, action.payload);
        return state.filter((task) => task.id !== action.payload);
        
    case TODOS_ACTION.EDIT_TASK:
        console.log('editing', state);
        return state.map((task) => task.id === action.payload.id ? { ...task, name: action.payload.name } : task);

    default:
        return state;    
   }
};


const UseReducer = () => {
  const [todos, dispatch] = useReducer(reducer, initialState, init);   //in 'reducer' we declare the functions for all the tasks. 
  
  const handleTask = (e) => {
    if (e.key === 'Enter') {
       dispatch({ type: TODOS_ACTION.ADD_TASK, payload: e.target.value });
       e.target.value = ''; // Clear the input after adding
    }
  };

  const deleteTask = (id) => {
    dispatch({ type: TODOS_ACTION.DELETE_TASK, payload: id });
  };

  const editTask = (id, name) => {
    dispatch({ type: TODOS_ACTION.EDIT_TASK, payload: { id, name } });
  };

  return (
    <>
      <div>Task List {todos.length}</div>
      <label htmlFor='task'>Enter Task</label>
      <input type='text' id='task' onKeyDown={handleTask} />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className='flex gap-5'>
              <span className='mr-5'>{todo.id}. {todo.name}</span>
              <button className='border border-black mr-5' onClick={() => deleteTask(todo.id)}> Delete</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  const newName = prompt("Edit task:", todo.name); // Prompt for new task name
                  if (newName) {
                    editTask(todo.id, newName); // Call editTask with new name
                  }
                }}
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4"
              >
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
              </svg>
            </div>
          </li>
        ))}
      </ul>
      
    </>
  );
};

export default UseReducer;
