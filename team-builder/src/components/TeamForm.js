import React, { useState } from 'react';

import './TeamForm.css';


function TeamForm(props) {
    const[name, setName] = useState('');

    const handleChange = e => {
    
        setName(e.target.value);
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        props.addMember(name);
        setName('');
    };
    return (
    <div className='formDiv'>
        <h1>stateChecker: {name}</h1>
        <form type='submit' onSubmit={handleSubmit}>
            <label>
                New Member Name:
                <input 
                type='text'
                value={name}
                name={name}
                placeholder='Enter name here to add member'
                onChange={handleChange}
                />
            </label>
            <button>submit</button>
        </form>
    </div>
    )
}

export default TeamForm;