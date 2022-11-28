import ToDoList from "./components/ToDoList";

function App() {
  const tareas =[
    {id: 1,
    nombreTarea: "Curso",
    estadoTarea: true},
    {id: 2,
    nombreTarea: "Ada",
    estadoTarea: false},
    {id: 3,
    nombreTarea: "School",
    estadoTarea: false},
    {id: 4,
      nombreTarea: "React",
      estadoTarea: true},
    {id: 5,
      nombreTarea: "React",
       estadoTarea: true}  
  ]
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
