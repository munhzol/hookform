import React, { useState }  from 'react';

const SignupForm = (props) => {
    // const [username, setUsername] = useState("");

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [password_confirm, setPasswordConfirm] = useState("");  


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, password_confirm };
        console.log("Welcome", newUser);
    };
    return (
        <>
        <form onSubmit={ createUser } className="customClass">
            <div>
                <label htmlFor="firstname">Firstname: </label>
                <input type="text" required id="firstname" onChange={ (e) => setFirstname(e.target.value) } value={ firstname } />
            </div>
            <div>
                <label htmlFor="lastname">Latname: </label>
                <input type="text" required id="lastname" onChange={ (e) => setLastname(e.target.value) } value={ lastname } />
            </div>
            {/* <div>
                <label htmlFor="username">Username: </label>
                <input type="text" required id="username" onChange={ (e) => setUsername(e.target.value) } value={ username } />
            </div> */}
            <div>
                <label htmlFor="">Email: </label>
                <input type="email" onChange={ (e) => setEmail(e.target.value) } value={ email }  />
            </div>
            <div>
                <label htmlFor="">Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } value={ password }  />
            </div>
            <div>
                <label htmlFor="">Confirm Password: </label>
                <input type="password" onChange={ (e) => setPasswordConfirm(e.target.value) } value={ password_confirm }  />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <hr/>
        <div>
            Firstname: {firstname}
        </div>
        <div>
            lastname: {lastname}
        </div>
        <div>
            Email: {email}
        </div>
        <div>
            Password: {password}
        </div>
        <div>
            Cnfrm Password: {password_confirm}
        </div>
        </>
    );
}

export default SignupForm;
