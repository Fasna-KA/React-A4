import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Student() {
  return (
<table class="table table-bordered border-primary">
  <thead>
    <br/>
  <h2>Students</h2>
  <br></br>

  <Link to='/AddStudent'>
  <button className='add'>Add Student</button>
  </Link>

    <tr>
      <th scope="col">NAME</th>
      <th scope="col">AGE</th>
      <th scope="col">COURSE</th>
      <th scope="col">BATCH</th>
      <th scope="col">CHANGE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">John</th>
      <td>24</td>
      <td>MERN</td>
      <td>October</td>
      <td><Link to = "/Edit">Edit</Link></td>
    </tr>
    <tr>
      <th scope="row">Mark</th>
      <td>25</td>
      <td>MERN</td>
      <td>September</td>
      <td><Link to = "/Edit">Edit</Link></td>

    </tr>
    <tr>
      <th scope="row">Mike</th>
      <td>26</td>
      <td>MERN</td>
      <td>December</td>
      <td><Link to = "/Edit">Edit</Link></td>

    </tr>
  </tbody>
</table>  )
}

export default Student