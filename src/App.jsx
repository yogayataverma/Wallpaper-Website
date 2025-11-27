import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, createBrowserRouter, Routes, Route } from 'react-router-dom';


function App() {


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
    </>
  )
}

export default App
