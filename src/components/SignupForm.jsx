import React  from 'react';

const SignupForm = props => {

    const {inputs, setInputs} = props;

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    // // const [username, setUsername] = useState("");

    // const [firstname, setFirstname] = useState("");
    // const [lastname, setLastname] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");  
    // const [password_confirm, setPasswordConfirm] = useState("");  


    // const createUser = (e) => {
    //     e.preventDefault();
    //     // const newUser = { firstname, lastname, email, password, password_confirm };
    //     // console.log("Welcome", newUser);
    // };

    return (
        <>
        {/* <form onSubmit={ createUser } className="customClass"> */}
        <form className="customClass">
            <div>
                <label htmlFor="firstName">Firstname: </label>
                <input type="text" onChange={ onChange } required id="firstName" name="firstName"  />
            </div>
            <div>
                <label htmlFor="lastName">Latname: </label>
                <input type="text" required id="lastName" name="lastName" onChange={ onChange }  />
            </div>
            {/* <div>
                <label htmlFor="username">Username: </label>
                <input type="text" required id="username" onChange={ (e) => setUsername(e.target.value) } value={ username } />
            </div> */}
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" onChange={ onChange } id="email" name="email"  />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" onChange={ onChange } id="password" name="password"  />
            </div>
            <div>
                <label htmlFor="passwordConfirm">Confirm Password: </label>
                <input type="password"  onChange={ onChange } id="passwordConfirm" name="passwordConfirm"  />
            </div>
            <input type="submit" value="Create User" />
        </form>
        </>
    );
}

export default SignupForm;
