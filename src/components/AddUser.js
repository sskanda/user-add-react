import React, { useState } from "react";
import "./AddUser.css";

function AddUser() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const submithandler = (e) => {
    e.preventDefault();
    console.log(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };
  const namehandler = (e) => {
    setEnteredName(e.target.value);
  };
  const agehandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <div className="add-user">
      <form id="form-container" onSubmit={submithandler}>
        <label>Username</label>
        <input
          type="text"
          id="name"
          onChange={namehandler}
          value={enteredName}
        ></input>
        <label>Age</label>
        <input
          type="text"
          id="age"
          onChange={agehandler}
          value={enteredAge}
        ></input>
        <button>Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
