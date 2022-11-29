import ToDoList from "./components/ToDoList";
import useCreateTask from "./hooks/useCreateTask"

function App() {
  const tareas = useCreateTask();
  return (<>
    <div className="todo-list-paper">
    <h2 className="todo-list-title">To Do List</h2>
    {
      tareas.map(
      (tarea) =>
      (<ToDoList
        key = {tarea.id}
        id = {tarea.id}
        nombreTarea = {tarea.nombreTarea}
        estadoTarea = {tarea.estadoTarea}
      />)
      ) 
    }
    </div>
  </>);
}

export default App;
