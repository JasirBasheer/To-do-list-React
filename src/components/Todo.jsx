import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";


const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>
        <p className={task.completed?"completed TaskText":"incompleted TaskText"}>{task.task}</p>
        <div className="Icons">
                <FontAwesomeIcon  onClick={() => toggleComplete(task.id)} icon={faCircleCheck} />
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} title="Edit Task" />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} title="Delete Task" />

            </div>
    </div>
  )
}

Todo.propTypes ={
  toggleComplete: PropTypes.func,
  deleteTodo: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  task:PropTypes.shape({
      task:PropTypes.string.isRequired,
      id:PropTypes.number.isRequired
  }).isRequired,
}
export default Todo