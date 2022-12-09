import { useState, useRef } from "react";

import "./App.css";

function App() {
  //Create the use state
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  //create use ref
  const inputTask = useRef(null);

  //Create function for btn
  const addTask = () => {
    setTodoList([...todoList, currentTask]);
    inputTask.current.value = "";
    setCurrentTask("");
  };

  //create a delete function
  const deleteBtn = (deleteTask) => {
    setTodoList(
      todoList.filter((todo) => {
        return todo !== deleteTask;
      })
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          ref={inputTask}
          type="text"
          placeholder="add task.."
          onChange={(e) => setCurrentTask(e.target.value)}
        />
        <button
          type="button"
          onClick={addTask}
          disabled={currentTask.length < 1}
        >
          Add Task
        </button>
      </div>
      <hr />
      {todoList.map((todo) => {
        return (
          <div id="task">
            <h2>{todo}</h2>
            <button onClick={() => deleteBtn(todo)}>x</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
