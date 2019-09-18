import React, { useState } from 'react';

import TeamForm from "./Components/TeamForm";
import Team from "./Components/Team";

import './App.css';

function App() {
  const [members, setMembers] = useState([
    // {
    //   id: 1,
    //   name: "Paul",
    //   email: "Paul@gmail.com",
    //   role: "Javascript Gawd"
    // }
  ]);
  const addNewMember = team => {
    const newTeam = {
      id: Date.now(),
      name: team.name,
      email: team.email,
      role: team.role
    }
    setMembers([...members, newTeam])
  }
  return (
    <div className="App">
      <h1>Team Builder Form</h1>
        <TeamForm newMember={addNewMember}/>
        <Team members={members}/>
    </div>
  );
}

export default App;
