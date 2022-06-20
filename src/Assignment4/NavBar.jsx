import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
<nav class="navbar navbar-expand-lg bg-primary" >
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
          <Link class="nav-link" to="/student">Student</Link>
          <Link class="nav-link" to="/contact">Contact</Link>
      </ul>
    </div>
  </div>
</nav>  )
}

export default NavBar