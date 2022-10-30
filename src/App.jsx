import React from 'react'
// import Challenge1 from './Challenge1'
// import ComA from './Pokemon API/ComA'
import { Route,Routes, Navigate} from 'react-router-dom'
import About from './React Router/About'
import Contact from './React Router/Contact'
import Error from './React Router/Error'
import Menu from './React Router/Menu'
import Search from './React Router/Search'
import User from './React Router/User'
// import './React Router/Menu.css'

const App = () => {
  return (
    <>
        {/* <Challenge1/> */}
        {/* <ComA/> */}
        {/* <About /> */}
        <Menu />
        <Routes>
          <Route exact path='/' caseSensitive={false} element={<About name="About" />}/>
          <Route exact caseSensitive={false} path='/contact' element={<Contact name="contact"/>}/>
          <Route exact caseSensitive={false} path='/user/:fname/:lname' element={<User/>}/>
          <Route exact caseSensitive={false} path='/search' element={<Search/>}/>
          {/* <Route element={<Error/>} /> */}
          {/* <Route path='/' element={<Navigate to='/search' />} /> */}
        </Routes>


    </>
  )
}

export default App