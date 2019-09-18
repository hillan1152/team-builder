import React from "react";

const Team = props => {
    console.log(props)
    return (
        <>
        {props.members.map(member => (
            <div className="member" key={member.id}>
                <h3>{member.name}</h3>
                <p>{member.email}</p>
                <p>{member.role}</p>
            </div>
        ))}
        </>
    )
}
export default Team;