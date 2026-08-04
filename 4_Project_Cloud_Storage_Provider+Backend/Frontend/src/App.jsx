import React from 'react'
import {Router,Routes,Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost.jsx'
import Feed from './pages/Feed.jsx'
const App = () => {
  return (
    <div className='min-h-screen bg-gray-100 text-white '>
      <Routes>
        <Route path='/' element={<h1>Hello World</h1>}/>
        <Route path='/about' element={<h1>About Page</h1>}/>
        <Route path='/createpost' element={<CreatePost/>}/>
        <Route path='/feed' element={<Feed/>}/>
      </Routes>
    </div>
  )
}

export default App