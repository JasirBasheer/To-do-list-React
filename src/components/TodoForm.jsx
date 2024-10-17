import React, { useRef, useState } from 'react'
import { message } from "antd";


const TodoForm = ({addTodo}) => {
    const [task,setTask] = useState("")
    const inputRef = useRef()

    const handleSubmit =(e) =>{
        e.preventDefault()
        if(!task.trim()){
            message.error("Please enter a task")
            inputRef.current.focus()
            return ;    
        }
        addTodo(task)
        setTask("")
    }

    

  return (
    <form onSubmit={handleSubmit}>

    <input type="text" 
    className='TaskInp'
    placeholder='What is the task for Today ...'
    value={task}
    onChange={(e)=>setTask(e.target.value)}
    ref={inputRef}
    />
    <button className='addTodoBtn' type='submit' >Add Task</button>
    </form>
  )
}

export default TodoForm