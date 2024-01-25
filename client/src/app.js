import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import ViewAllPosts from './pages/ViewAllPosts'
import { Route, Routes } from 'react-router-dom';

function App() {
    return(
        <>
          <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/viewpost/:postId" element={<ViewAllPosts />} />
                <Route path="/viewallposts" element ={<ViewAllPosts />} />
            </Routes>
        </>
    )
}

export default App;