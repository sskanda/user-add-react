import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [userlist, setUserlist] = useState([]);
  const addUsertoArray = (uName, uAge) => {
    setUserlist((prevlist) => {
      return [
        ...prevlist,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onUserAdd={addUsertoArray}></AddUser>
      <UserList users={userlist}></UserList>
    </div>
  );
}

export default App;
