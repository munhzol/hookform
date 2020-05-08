import React from 'react';

const Result = (props) => {

    // const Result = ({data}) => {
    
    // const [username, setUsername] = useState("");

    // const [firstname, setFirstname] = useState("");
    // const [lastname, setLastname] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");  
    // const [password_confirm, setPasswordConfirm] = useState("");  


    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { firstname, lastname, email, password, password_confirm };
    //     console.log("Welcome", newUser);
    // };

    const {firstName, lastName, email, password, passwordConfirm} = props.data;

    return (
        <div className="customClass">
            <div>
                Firstname: {firstName}
            </div>
            <div>
                lastname: {lastName}
            </div>
            <div>
                Email: {email}
            </div>
            <div>
                Password: {password}
            </div>
            <div>
                Cnfrm Password: {passwordConfirm}
            </div>
        </div>
    );
}

export default Result;
