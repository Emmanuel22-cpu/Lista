import { useState } from "react";
import { TrashIcon, PencilSquareIcon, CheckIcon } from "@heroicons/react/16/solid"

export default function TodoItem({ tarea, toggleComplete, eliminarTarea, editarTarea }) {
       const [editando, setEditando] = useState(false);
      const [nuevoTexto, setNuevoTexto] = useState(tarea.texto)

        const guardarEditar = () => {
        if (nuevoTexto.trim()){
          editarTarea(tarea.id, nuevoTexto.trim());
          setEditando(false);
        }
      }


    return(


      <div className="flex items-center gap-3 mb-2 p-3 shadow-md rounded">
        {editando ?(
          <input className="flex-1 p-2 border rounded" value={nuevoTexto} onChange={(e) => setNuevoTexto(e.target.value)}/>
        ) : (
          <span className={`${tarea.completada ? 'line-through' : 'text-gray-400'}`}>{tarea.texto} </span>  )}
          <div className="flex items-center gap-2 ml-auto">
              <input className="cursor-pointer w-5 h-5" type="checkbox" onChange={() => toggleComplete(tarea.id)} />
              {editando ? (
                <button onClick={guardarEditar}>
                <CheckIcon className="w-7 h-7 text-green-600 font-bold"/>
                </button>
              ) : (
                <button onClick={() => setEditando(true)}>
                <PencilSquareIcon className="w-5 h-5 text-gray-400 hover:text-yellow-500" />
          </button>
        )}
                
          <button onClick={() => eliminarTarea(tarea.id)}>

            <TrashIcon className="w-5 h-5 text-gray-400 hover:text-red-500" />
          </button>
              
        </div>
      </div>


 
   )


}