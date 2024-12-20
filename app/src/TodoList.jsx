
import './TodoItem.jsx'
import {useState} from "react";
import TodoItem from "./TodoItem.jsx";

function TodoList() {

   const [todoItems, setTodoItems] = useState([]);

   const addTask = () => { setTodoItems([...todoItems, { id: todoItems.length, text: "New Task" }]);};

   const tasks = todoItems.map(todo => <TodoItem key={todo.id} text={todo.text} />);

    return(
    <div>
        <ul>
            {tasks}
        </ul>
        <button onClick={addTask}>
            Add Task
        </button>
    </div>
    );
}

export default TodoList;