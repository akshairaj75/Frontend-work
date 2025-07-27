import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import UserCard from './components/UserCard'
import { useState } from 'react'
import {Router, Route, Routes} from 'react-router-dom'
function App() {

  const [user, setUser] = useState({ name: '', email: '', password: '' });
  return (
    <>
      <Navbar/>
        <SignUp setUser={setUser}/>
        <UserCard user={user} />
      
    </>
  )
}

export default App
