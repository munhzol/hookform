import React, { useState } from 'react';
import './App.css';

// import PersonCard from './components/PersonCard';
// import UserForm from './components/UserForm';

import SignupForm from './components/SignupForm';
import Result from './components/Result';

function App() {
  const [state, setState] = useState({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      passwordConfirm:""
  });

  return (
      <>

        <SignupForm inputs={state} setInputs={setState} />
        <Result data={state} />


        {/* <UserForm/>
        <PersonCard className="person-card" firstName="Doe" lastName="Jane" age={45} hairColor="Black"/>
        <PersonCard className="person-card" firstName="Doe1" lastName="Jane1" age={41} hairColor="White"/>
        <PersonCard className="person-card" firstName="Doe2" lastName="Jane2" age={42} hairColor="Yellow"/>
        <PersonCard className="person-card" firstName="Doe3" lastName="Jane3" age={43} hairColor="Green"/> */}

      </>    
  );
}

export default App;
