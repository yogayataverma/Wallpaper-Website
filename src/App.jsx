<<<<<<< HEAD
import { useState } from 'react'
=======
>>>>>>> 857befe281a405e67d118a9df952cb2a9bf4ae8a
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, createBrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
<<<<<<< HEAD


  return (
    <>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="home" element={<h1>Home</h1>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="featured" element={<h1>Featured</h1>} />
      </Routes>
      </BrowserRouter>
      <Footer />
=======

  return (
    <>
      
>>>>>>> 857befe281a405e67d118a9df952cb2a9bf4ae8a
    </>
  )
}

export default App
