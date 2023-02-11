import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/navbar.css"

function navbar() {
    return (
        <nav className="navbar"> 
            {/* <Link to="/" ><i className="ri-home-4-fill"></i></Link> */}
            <Link to="/" ><div className='logo-ag'><h3>Amit </h3><div className='logo-ag-2'><h3>G</h3></div></div></Link>
            <div className="navbox">
                <Link to="/about" ><p>About</p></Link>
                <Link to="/blog" ><p>Blog</p></Link>
                <Link to="/projects" ><p>Projects</p></Link>
                <a href="mailto: amitgajre7083@gmail.com" ><i className="ri-mail-send-fill"></i></a>
            </div>
        </nav>
    )
}

export default navbar