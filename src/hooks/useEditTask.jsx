import { useEffect, useState } from "react";
import useCreateTask from "./useCreateTask";

export default useEditTask(){
    
    const [editar, setEditar] = useCreateTask()
    
    const modificar = () =>{
        setEditar.id(1)
        setEditar.nombreTarea("Holi")
        setEditar.estadoTarea(false)
    }

    useEffect(()=>{
        console.log(editar)
    },[editar]);

    return (
        <>
            <div>
                <h3>{modificar}</h3>
            </div>
        </>
    )
}