import { useState } from 'react'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

// import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
function App() {
  const [tasks,setTasks] = useState([])
  const [newTask,setNewTask] = useState('')
  // const [added,setAdded] = useState(false)
  const addTodo=(newTask)=>{
    
    if(newTask.trim()){
      setTasks([...tasks,newTask])
    setNewTask('')
   
    }
    
  }
  const deleteTodo=(thistask)=>{
    const filteredTask=tasks.filter(task=>task!=thistask)
    setTasks(filteredTask)
  }

  return (
    <>
      <div className='flex justify-center m-auto mt-32'>
        <div className='flex flex-col border border-gray-300 w-1/3 h-64 p-4 bg-white rounded-md'>
        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">Todo List</h2>
         <ul >
          {tasks.map((task,index)=>(
            <div className='flex flex-row justify-around '>
          <li
          className='m-1 h-8 w-56 px-4 py-2 bg-blue-100 text-blue-800 font-medium border shadow-sm border-black' 
          key={task}>
            {task}
          </li>
          
          <button
            className="text-red-500 hover:text-red-700 transition-colors"
            onClick={() => deleteTodo(task)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          </div>
          )
        )}
         </ul>
         
         <input 
         type="text" 
         value={newTask}
         onChange={e=>setNewTask(e.target.value)}
         className='m-6 mr-5 h-10 w-3/4 border border-gray-300 px-4 rounded-md focus:ring-2 focus:ring-blue-400'
         />
         <button 
         className='h-10 w-full bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition-colors' 
         onClick={()=>addTodo(newTask)}>
          Add a Todo
          </button>
        </div>
        </div>    
    </>
  )
}

export default App
