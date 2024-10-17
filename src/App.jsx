import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import TodoWrapper from './components/TodoWrapper'
import './App.css'




function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<TodoWrapper/>}/>
    </Routes>
    </BrowserRouter>

   
  )
}

export default App
