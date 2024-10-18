import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import TodoWrapper from './components/TodoWrapper'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'




function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={
              <ProtectedRoute>
              <TodoWrapper />
            </ProtectedRoute>
        }/>
    </Routes>
    </BrowserRouter>

   
  )
}

export default App
