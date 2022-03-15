import React, { useState, createRef, Component } from 'react';
import Entry from './Entry.js';
import '../Styles/Ledger.css';

import { Checkbox, TextField, FormControlLabel } from '@mui/material';
import { nanoid } from 'nanoid';
import { treasure } from '../App/ledger';

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
        <div style={{ width, backgroundColor: '#f4f4f4', display: 'flex' }}>
            <div style={ { width } }>
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
            <div className='chart' style={{backgroundColor: '#f4f4f4'}}>
                <div>
                    Treasure<br/><br/>- Balance: ${treasure.balance}<br/>- Digital: ${treasure.digital}<br/>- Physical ${treasure.physical}
                </div>
                <Canvas items={items}/>
            </div>
        </div>
        </>
    );
};

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.canvas = createRef();
    };

    componentDidMount() {
        const canvas = this.canvas.current;
        const context = canvas.getContext('2d');


    };

    render() {
        return <canvas ref={this.canvas} width={this.props.width} height={this.props.height}></canvas>
    };
}
export default Ledger;