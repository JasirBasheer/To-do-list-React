import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { message } from "antd";
import TodoForm from './TodoForm'
import EditTodoForm from './EditTodoForm'
import Todo from './Todo'
import Swal from 'sweetalert2';
import { v4 as uuidV4 } from 'uuid';

const getAllToDos=()=>{
    const lists=localStorage.getItem('lists')
    
    if(lists){
        try {
            console.log(JSON.parse(lists))
            return JSON.parse(lists);  
        } catch (error) {
            console.error('Error parsing JSON:', error);
            return [];  
        }    }else{
        return []
    }

}


const TodoWrapper = () => {

    const navigate = useNavigate()
    const [todos,setTodos] = useState(getAllToDos())
    
      useEffect(()=>{
        localStorage.setItem('lists',JSON.stringify(todos))
      },[todos])


      const handleLogout = () => {
        localStorage.removeItem("userEmail");
        message.success("Loggouted successfully");
        navigate("/login");
      };

      const addTodo = (todo) =>{
        const newTodo ={
            id:uuidV4(),
            task:todo,
            completed:false,
            isEditing:false,
        }
        const updatedTodos = [...todos,newTodo]
        updatedTodos.sort((a, b) => a.completed === b.completed ? 0 : a.completed ? 1 : -1);
        setTodos(updatedTodos)

      }
      
      const deleteTodo = (id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,  
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            customClass: {
                confirmButton: 'btn-confirm',
                cancelButton: 'btn-cancel'
              },
          }).then((result) => {
            if (result.isConfirmed) {
                const updatedTodos = todos.filter((item)=>{
                    return item.id !==id
                })
                setTodos(updatedTodos)
                message.success('Task successfully deleted')
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                return;
                }
          });
      }

      const toggleComplete =(id)=>{
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          );

          updatedTodos.sort((a, b) => a.completed === b.completed ? 0 : a.completed ? 1 : -1);


          setTodos(updatedTodos)
      }

      const editTodo = (id) =>{
        console.log(id)
        const updatedtodo = todos.map((todo)=>
            todo.id == id ? {...todo,isEditing:!todo.isEditing}:todo 
        )
        setTodos(updatedtodo)
      }

      const editTask = (id,task) =>{
        const updatedtodo = todos.map((todo)=>{
            return todo.id == id ? {...todo,task:task,isEditing:!todo.isEditing}:todo 
        })
        setTodos(updatedtodo)
      }


  return (
    <>
        <button className='logoutBtn' onClick={handleLogout}>Logout</button>
    <div className='main'>
    <div className="imageDiv">
        <img src="/main.png" alt="" />
    </div>
    <div className="todoDiv">
        <div className="TodoWrapper">
        <h1>Getting Things Done!</h1>
    <TodoForm addTodo={addTodo}/>
    <div className="TaskContainer">
    {todos.map((todo,index)=>{
          return todo.isEditing?(
        <EditTodoForm editTask={editTask} 
                      todo={todo}
                      key={index}  />
    ):(
            <Todo task={todo} 
                  key={index}
                  deleteTodo={deleteTodo}
                  toggleComplete={toggleComplete}
                  editTodo={editTodo}
                  />
)
    })}
        </div>
       

        </div>
    </div>
    </div>

    </>
  )
}

export default TodoWrapper