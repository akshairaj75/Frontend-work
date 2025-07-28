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
        <Routes>
          <Route path="/" element={<SignUp setUser={setUser} />} />
          <Route path="/user" element={<UserCard user={user} />} />
        </Routes>
    </>
  )
}

export default App
