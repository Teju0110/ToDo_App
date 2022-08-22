import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {Delete, Add } from "@mui/icons-material";

function App() {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const todos = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
      todo,
    };

    dispatch({ type: "ADD_TODO", payload: data });
  };

  const handleDelete = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <div className="App">
      <header className="App_header">
        <h1>ToDo List App</h1>
        <form style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Enter a Todo"
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Add
            className="todoBTN"
            style={{
              marginLeft: 20,
            }}
            onClick={handleSubmit}
          />
        </form>
        <ul className="allToDos">
          {todos &&
            todos.map((t) => (
              <li key={t.id} className="singleToDo">
                <span className="ToDoText" style={{ flex: 1, color: "white" }}>
                  {t.todo}
                </span>
                
                <Delete
                  className="todoBTN"
                  onClick={() => handleDelete(t.id)}
                />
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
