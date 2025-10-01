import TodoItem from "./Todoitem";
import { useState}  from "react"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer} from "react-toastify"
import { useAuth } from "./context/AuthContext"

export default function App () {
    const [tareas, setTareas] = useState([])
     const [ input , setInput ] = useState("")

      const { logout } = useAuth()




    const agregarTareas = () => {

        if(input.trim()){

            setTareas([...tareas,{ id: Date.now(), texto: input.trim(), completada: false },])
            setInput("")

        }  
    }
      const toggleComplete = (id) => {
        setTareas(
            tareas.map((tarea) =>
                tarea.id === id? { ...tarea, completada: !tarea.completada } : tarea
          )
        )
      }

      const eliminarTarea = (id) => {
        setTareas(tareas.filter((tarea) => tarea.id !== id));
      } 

      const editarTarea = (id, nuevoTexto) => {
        setTareas(tareas.map((tarea) => tarea.id === id? { ...tarea, texto:nuevoTexto}: tarea));
      }

    



    console.log(tareas.map(tarea => tarea.texto )) 


    return(

        <div className="max-w-md mx-auto mt-10">


            <h1 className="text-3xl font-bold mb-5 text-center"> 
                MI LISTA DE TAREAS 
                </h1>
        <div className="flex gap-3 mb-4 ml-auto">
        <input className="flex-1 p-3 shadow-md rounded" type="text" value={input} placeholder="Nueva Tarea" onChange={(e) => setInput(e.target.value)}/>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={agregarTareas}> Agregar Tarea </button>
        </div>
        <div>
        {tareas.map((tarea) => (

        <TodoItem key={tarea.id} tarea={tarea} toggleComplete={toggleComplete} eliminarTarea={eliminarTarea} editarTarea={editarTarea}/>))}
        </div>
        </div>
    )
}
