import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../pages/about/About'
import Blog from '../pages/blog/Blog'
import Contact from '../pages/contact/Contact'
import Resume from '../pages/resume/Resume'
import Portfolio from '../pages/portfolio/Portfolio'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'

export default function Routing() {
  return (
    <BrowserRouter>
    <main>
       <Sidebar />
       <div className="main-content">
        <Navbar/>
         <Routes>
        <Route path="/" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<h1>Page Not Found</h1> } />
        </Routes>
       </div>
    </main>
    </BrowserRouter>  
  )
}
