import ToDoList from "./components/ToDoList";

function App() {
  const tareas =[
    {id:1,
    nombreTarea:"Curso"},
    {id:2,
    nombreTarea:"Ada"},
    {id:2,
    nombreTarea:"School"},
    {id:2,
    nombreTarea:"React"}
  ]
  return (<>
    <div className="todo-list-paper">
    <h2 className="todo-list-title">To Do List</h2>
    {
      tareas.map(
      (tarea) =>
      (<ToDoList
        key={tarea.id}
        id={tarea.id}
        nombreTarea={tarea.nombreTarea}
      />)
      ) 
    }
    </div>
    </>);
}

export default App;
