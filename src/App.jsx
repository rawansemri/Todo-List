import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/AddTodo/AddTodo';
import MyTodo from './Components/MyTodo/MyTodo';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
    <AddTodo />
    <MyTodo />
          
    </div>
  )
}

export default App
