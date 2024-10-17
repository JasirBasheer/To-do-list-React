import React, { useRef, useState } from 'react'
import {message} from 'antd'
const EditTodoForm = ({ editTask, todo }) => {
    const [task, setTask] = useState(todo.task)
    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(task.trim()==""){
            message.error('Please enter something')
            inputRef.current.focus()
            return
        }
        editTask(todo.id, task)
    }
    return (
        <form onSubmit={handleSubmit}>

            <input type="text"
                className='TaskEditInp'
                placeholder='Enter your update ...'
                value={task}
                onChange={(e) => setTask(e.target.value)}
                ref={inputRef}
            />
            <button className='editTodoBtn' type='submit' >Save</button>
        </form>

    )
}

export default EditTodoForm