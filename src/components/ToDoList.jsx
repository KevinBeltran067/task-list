import "../styles/ToDoList.css";

function ToDoList({id,nombreTarea}){
    return(
        <>
        <input type="checkbox" name={id} className="todo-list-check" />
        <label htmlFor={id} className="todo-list-content">{nombreTarea}</label><br />
        </>
    );
}

export default ToDoList;