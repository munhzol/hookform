import React, { useState }  from 'react';

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
    };
    return (
        <form onSubmit={ createUser } className="customClass">
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" required id="username" onChange={ (e) => setUsername(e.target.value) } value={ username } />
            </div>
            <div>
                <label htmlFor="">Email: </label>
                <input type="email" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label htmlFor="">Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
}

export default UserForm;
