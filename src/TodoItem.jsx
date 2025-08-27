import { TrashIcon } from "@heroicons/react/16/solid"

export default function TodoItem({ tarea, toggleComplete, eliminarTarea }) {

    return(


      <div className="flex items-center gap-3 mb-2 p-3 shadow-md rounded">
          <span className={`${tarea.completada ? 'line-through' : 'text-gray-400'}`}>{tarea.texto} </span>  
          <div className="flex items-center gap-2">
              <input className="cursor-pointer w-5 h-5" type="checkbox" onChange={() => toggleComplete(tarea.id)} />
          <button onClick={() => eliminarTarea(tarea.id)}>

            <TrashIcon className="w-5 h-5 text-greay-400 hover:text-red-500" />
          </button>
      </div>
</div>



   )


}