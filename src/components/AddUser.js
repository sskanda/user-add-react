import React, { useState } from "react";
import "./AddUser.css";
import Error from "./Error";

function AddUser(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errorx, setErrorx] = useState("");
  const submithandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorx("Empty Name why");
      console.log(errorx);
      return;
    }
    if (+enteredAge < 0) {
      setErrorx("No Age");
      console.log(errorx);
      return;
    }
    props.onUserAdd(enteredName, enteredAge);
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
  const removeErrorhandler = () => {
    setErrorx("");
  };
  return (
    <div className="add-user">
      {errorx && (
        <Error title={errorx} onRemoveError={removeErrorhandler}></Error>
      )}
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
