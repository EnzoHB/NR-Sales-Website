import React, { useState } from 'react';
import Entry from './Entry.js';
import '../Styles/Ledger.css';

import { Checkbox, TextField, FormControlLabel } from '@mui/material';
import { nanoid } from 'nanoid';
import { ledger } from '../App/init.js';


function Ledger({ width, focus, items, shortForm, noteVisibility }) {

    var [ width, setWidth ] = useState(width);
    var [ items, setItems ] = useState(items) 
    var [ focus, setFocus ] = useState(focus);

    var [ shortForm, setShortForm] = useState(shortForm); 
    var [ noteVisibility, setNoteVisiblity] = useState(noteVisibility);

    var timeout;

    const handleTextChange = event => {
        clearTimeout(timeout);

        timeout = setTimeout(() => ( 
            setFocus(event.target.value), 
            clearTimeout(timeout)), 150);
    }

    const handleShortFormClick = event => setShortForm(event.target.checked)
    const handleNoteVisiblityClick = event => setNoteVisiblity(event.target.checked);

    return (
        <>
        <div style={{ width, backgroundColor: '#f4f4f4' }}>
            <div className='controls'>
                <TextField id="standard-basic" label="Focus" variant="standard" onChange={handleTextChange} defaultValue={focus}/>
                <FormControlLabel control={<Checkbox onChange={handleShortFormClick}/>} label="Short Form" />
                <FormControlLabel control={<Checkbox onChange={handleNoteVisiblityClick}/>} label="Show Notes" />
            </div>
            <div className='ledger'>
                {items.map(({ id, subject, operation, target, amount, note }) => (
                    <Entry 
                        key={nanoid()}
                        shortForm={shortForm}
                        focus={focus}
                        note={note}
                        amount={amount}
                        target={target}
                        subject={subject}
                        isVisible={focus === subject || focus === target}
                        operation={operation}
                        isNoteVisible={noteVisibility}
                    />
                    )
                ).reverse()}
            </div>
        </div>
        </>
    );
};

export default ledger;