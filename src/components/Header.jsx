import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>School-Website React Router Demo </h1>
            <nav className='d-flex justify-content-around'>
                <Link to="/">Home</Link>
                <p>About</p>
                <p>Courses</p>
            </nav>
        </header>
  )
}

export default Header;