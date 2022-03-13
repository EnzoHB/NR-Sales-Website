import React, { createRef, useEffect, useState, useRef, Component } from 'react';
import Entry from './Entry.js';
import '../Styles/Entry.css';
import '../Styles/Note.css';
import { ledger } from '../App/ledger.js'
import { nanoid } from 'nanoid';

const FOCUS = 'Caixa';
const DEFAULT_NOTE_VISIBILITY = true;

const index = ledger.history.length - 1;
const sample = [ ledger.history[index] ];

function Ledger(props) {
    const t = true;
    const f = false;
    const style = {
        display: 'flex',
        width: '500px',
        flexWrap: 'wrap',
    }

    const [ focus, setFocus ] = useState(FOCUS);
    const [ shortForm, setShortForm ] = useState(false);
    const [ defaultNoteVisibility, setDefaultNoteVisibility ] = useState(DEFAULT_NOTE_VISIBILITY);

    return (
        <>
        <div style={style}>
            <Input legend='Focus' placeholder={focus} onChange={setFocus}/>
            <Input legend='Short Form' placeholder={shortForm} onChange={setShortForm}/>
            <Input legend='Note Visiblity' placeholder={`${defaultNoteVisibility}`} onChange={setDefaultNoteVisibility}/>
        </div>
        <br/>
        <br/>
        <div className='ledger'>
            {ledger.history.map(({ subject, operation, target, amount, note }) => (
                <Entry 
                    key={nanoid()}
                    shortForm={shortForm}
                    focus={focus}
                    note={note}
                    amount={amount}
                    target={target}
                    subject={subject}
                    isVisible={focus == subject || focus == target}
                    operation={operation}
                    isNoteVisible={defaultNoteVisibility}
                />
                ) 
            )}
        </div>
        </>
    );
}

function Input({ legend, placeholder, onChange }) {
    const style = {
        width: 'fit-content',
        display: 'inline'
    }
    
    var timeout;
    const handleChange = event => {
        if (timeout) return;

        timeout = setTimeout(() => {
            clearTimeout(timeout)
            timeout = null;
            onChange(event.target.value);
        }, 50)
    }

    return (
        <fieldset style={style}>
            <legend>{legend}</legend>
            <input placeholder={placeholder} onInput={handleChange}></input>
        </fieldset>
    );
};

export default Ledger;
  