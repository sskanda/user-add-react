import React from "react";
import "./AddUser.css";

function AddUser() {
  const submithandler = (e) => {
    e.preventDefault();
    console.log("dafaq");
  };

  return (
    <div className="add-user">
      <form id="form-container" onSubmit={submithandler}>
        <label>Username</label>
        <input type="text"></input>
        <label>Age</label>
        <input type="text"></input>
        <button>Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
