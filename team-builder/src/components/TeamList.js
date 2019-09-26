import React, { useState } from 'react';

import './TeamList.css';
import TeamForm from './TeamForm.js';
import { team } from '../data/team.js';

function TeamList() {
    const t = team;
    const [list, setList] = useState(t);

    const addMember = (member) => {
        setList([...list, member]);
    }

    return (
    <div className='listDiv'>
        {list.map(p => <p>{p}</p>)}
        <TeamForm addMember={addMember}/>
    </div>
    )
}

export default TeamList;