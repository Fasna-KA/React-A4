import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { store } from './Detail'

const Student = () => {
    const [student] = useContext(store);
  return (
    <table className="table table-bordered border-primary">
      <thead>
        <br />
        <h2>Students</h2>
        <br></br>

        <Link to="/addstudent">
          <button className="add">Add Student</button>
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
        {student.map((student) => (
          <tr key={student.id}>
            <td>{student.Name}</td>
            <td>{student.Age}</td>
            <td>{student.Course}</td>
            <td>{student.Batch}</td>
            <td>
              <Link to="/addstudent">Edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Student;
