import React, { useState } from "react";


const TeamForm = props => {
    console.log(props);
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "", 
    })

    const handleChanges = e => {
        setMember({...member, [e.target.name]: e.target.value});
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({ name: "", email: "", role: "" });
        console.log(e.target.value);
    }

    return(
        <form onSubmit={submitForm}>
            <h2>Add New Member</h2>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name"
                onChange={handleChanges}
                value={member.name}
            />
            <label htmlFor="email">Email:</label>
            <input
                type="text"
                name="email"
                onChange={handleChanges}
                value={member.email}
            />
            <label htmlFor="role">Role:</label>
            <input
                type="text"
                name="role"
                onChange={handleChanges}
                value={member.role}
            />
            <button type="submit">Submit Member</button>
        </form>
    )
}

export default TeamForm;