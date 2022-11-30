import { useState } from "react";

export default function useCreateTask(){
    
    const tarea =[
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
          nombreTarea: "Node",
           estadoTarea: true}  
      ]

    const [tareas, setTareas] = useState(tarea);
    
    return tareas;
}
