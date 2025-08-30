import React from 'react'
import {Link,} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">

        <ul className="navbar-list">

          <li className="navbar-item">
            <Link to="/" className="navbar-link active" data-nav-link>About</Link>
            {/* <button className="navbar-link  active" data-nav-link>About</button> */}
          </li>

          <li className="navbar-item">
            <Link to="resume" className="navbar-link active" data-nav-link>Resume</Link>
            {/* <button className="navbar-link" data-nav-link>Resume</button> */}
          </li>

          <li className="navbar-item">
            <Link to="portfolio" className="navbar-link active" data-nav-link>Portfolio</Link>
            {/* <button className="navbar-link" data-nav-link>Portfolio</button> */}
          </li>

          <li className="navbar-item">
            <Link to="blog" className="navbar-link active" data-nav-link>Blog</Link>
            {/* <button className="navbar-link" data-nav-link>Blog</button> */}
          </li>

          <li className="navbar-item">
            <Link to="contact" className="navbar-link active" data-nav-link>Contact</Link>
            {/* <button className="navbar-link" data-nav-link>Contact</button> */}
          </li>

        </ul>

      </nav>
  )
}
