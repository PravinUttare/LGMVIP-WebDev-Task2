import React, { useState } from "react";
import './style.css';

const App=()=> {
  const[users, setUsers] = useState([]);

  const loadUsers=async()=>{
    console.log("Hello Sanchit API");
    const response = await fetch("https://reqres.in/api/users?page=1" );
    const jsonR = await response.json();
    setUsers(jsonR.data);
  };
return (
    <div className="App">
      <header>
      <h1 class="logo">SAP@</h1>

      <button onClick={loadUsers} >   Get User</button>
      </header>
      
      <ul class ="Bullets">

        {users.map(({ id , email,first_name,last_name,avatar }) => (
          <li class="li"key = {id}> 
            <img class="dp" src={avatar}></img>
            <li class="li1">Name : {first_name} {last_name} </li>
            <li class="li1">Email ID : {email}</li>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
