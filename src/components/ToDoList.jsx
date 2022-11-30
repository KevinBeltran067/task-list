import "../styles/ToDoList.css";

export default function ToDoList({id,nombreTarea,estadoTarea}){

    return(
        estadoTarea
        ? <>
            <h3 className="todo-list-title">Completado</h3>
            
            <label htmlFor={id} className="todo-list-content">{nombreTarea}</label><br />
        </>
        : <>
            <h3 className="todo-list-title">Pendiente</h3>
            
            <label htmlFor={id} className="todo-list-content">{nombreTarea}</label><br />
        </>
        );
}

/*
Para colocar esta linea y quede en orden, borrar "text-align: center;" de ".todo-list-paper"
<input type="checkbox" name={id} className="todo-list-check" />
*/