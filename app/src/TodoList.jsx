
import './TodoItem.jsx'
import {useState} from "react";
import TodoItem from "./TodoItem.jsx";

function TodoList() {

   const [todoItems, setTodoItems] = useState([]);

   const addTask = () => { setTodoItems([...todoItems, { id: todoItems.length, text: "New Task" }]);};

    return(
    <>
        {todoItems.map((todo) => (<TodoItem key={todo.id} text={todo.text} />))}
        <button onClick={addTask}>
            Add Task
        </button>
    </>
    );

}

export default TodoList;