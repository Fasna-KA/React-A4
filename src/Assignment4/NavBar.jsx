import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
<nav className="navbar navbar-expand-lg bg-primary" >
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
          <Link className="nav-link" to="/student">Student</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
      </ul>
    </div>
  </div>
</nav>  )
}

export default NavBar