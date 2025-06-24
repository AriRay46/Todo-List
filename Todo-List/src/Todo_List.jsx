import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function Todo_list () {
    let[todos, setTodos]= useState([{task:'sample Task', id:uuidv4(), isDone:false}]);
    let[newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos)=> {
           return [...prevTodos,{task: newTodo, id:uuidv4(), isDone: false}]
    });
        setNewTodo("");
        
    };

    let updateTodoValue = (event) =>{
          setNewTodo(event.target.value);
        };
        let deleteTodo = (id) =>{
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
           
        };

        let markAllDone = () => { 
            setTodos ((prevTodos) => (
                prevTodos.map((todo) =>{ 
                    return { 
                        ...todo,
                        isDone:true, 
                    };
                 })
               ) );
};

        let markAsDone = (id) => {
             setTodos ((prevTodos) =>
                prevTodos.map((todo) => { 
                    if (todo.id === id) {
                         return {
                             ...todo,
                              isDone: true,
                             }; 
                            } else { 
                                return todo; 
                            } 
                        })
    );
};


    return(
        <div className="todo-container">
        <input placeholder="Add a task"
         value={newTodo}
         onChange={updateTodoValue}>
        </input>
        <br></br>
        <button onClick={addNewTask}  className="add-btn">Add Task</button>
        <br></br>
        <br></br>

       <hr style={{ border: '1px solid black' }}></hr>
        <h4> TO-DO-LIST</h4>
        <ul>
           {
            todos.map((todo) => (
                <li key={todo.id}>
                  <span style={todo.isDone ? { textDecorationLine: "line-through"}: {}}>
                      {todo.task}
                    </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button  className="delete-btn" onClick={() => deleteTodo(todo.id)}>delete</button>
                  <button className="done-btn" onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                  </li>
            ))} 
        </ul>
        <br></br>
        <button onClick={markAllDone} className="all-done-btn">Mark All Done</button>
        </div>
    );
}