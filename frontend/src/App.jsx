import { Route, Routes } from 'react-router-dom'

import SideBar from './components/SideBar'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ExplorePage from './pages/ExplorePage'
import HomePage from './pages/HomePage'
import LikesPage from './pages/LikesPage'

function App() {



  return (
   <div className='flex'>
      <SideBar />
      <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
        <Routes>
          <Route path= '/' element = {<HomePage/>} />
          <Route path= '/login' element = {<LoginPage/>} />
          <Route path= '/signuo' element = {<SignUpPage/>} />
          <Route path= '/explore' element = {<ExplorePage/>} />
          <Route path= '/likes' element = {<LikesPage/>} />
        </Routes>
      </div>

   </div>
  )
}

export default App
