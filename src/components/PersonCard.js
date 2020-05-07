import React, { useState } from 'react';

const PersonCard = props => {
    // const [state, setState] = useState({
    //     clickCount: 0
    // });
    const [count, setCount] = useState(0);

    const handleCnt = () => {
        setCount(count + 1);
        // setState({
        //     clickCount: state.clickCount + 1
        // });
    }

    return(
        <div className="person-card">
            {/* { state.clickCount } */}
            { count }
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick={ handleCnt }>Count</button>
        </div>
    );

}

export default PersonCard;