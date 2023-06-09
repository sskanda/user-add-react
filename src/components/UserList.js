import React from "react";
import "./UserList.css";

function UserList(props) {
  return (
    <div id="list">
      <ul>
        {props.users.map((x) => (
          <li key={x.id}>
            {x.name} ({x.age})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
