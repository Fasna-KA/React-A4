import React from "react";

function Edit() {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <form style={{ marginTop: "25px" }}>
        <label>Name: </label>
        <input type="text" id="name" />
        <br></br>
        <br></br>
        <label>Age:   </label>
        <input type="text" id="age" />
        <br></br>
        <br></br>
        <label>Batch: </label>
        <input type="text" id="batch" />
        <br></br>
        <br></br>
        <label>Course: </label>
        <input type="text" id="course" />
        <br></br>
        <br></br>
      <button>Update</button>
      <button>Cancel</button>
      </form>
    </div>
  );
}

export default Edit;
