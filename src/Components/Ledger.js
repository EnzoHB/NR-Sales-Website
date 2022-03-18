import React, { useState, createRef, Component } from 'react';
import Entry from './Entry';
import Flex from './Flex';

import { Box, Switch, TextField, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material';
import { nanoid } from 'nanoid';
import { ledger } from '../App/ledger.js'

function Ledger() {

    const [ switchOn, setSwitchOn ] = useState(true);
    const [ focus, setFocus ] = useState('Caixa');

    const Body = styled(Box)(({ theme }) => ({
        width: '100%',
    }));

    const handleSwitchChange = event => setSwitchOn(event.target.checked)

    return (
        <Body>
            <Flex>
                <TextField id="standard-basic" label="Focus" variant="standard" defaultValue={'Caixa'}/>
                <FormControlLabel control={<Switch onChange={handleSwitchChange} defaultChecked={switchOn}/>} label={ switchOn? 'Income' : 'Outcome'} />
            </Flex>
            <EntriesDisplay items={ledger.profile.get(focus).fetch().every({ flow: () => switchOn? 1 : -1 })}/>
        </Body>
    )
};


function EntriesDisplay({ items }) {
    return (
        <Flex direction='column-reverse'>
            {items.map(item => <Entry key={item.id} name={item.flow == 1? item.subject : item.target} flow={item.flow} amount={item.amount} />)}
        </Flex>
    )
};

/*

function Ledger({ width, focus, items }) {

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
            <div>
                <div>
                    Treasure<br/><br/>- Balance: ${treasure.balance}<br/>- Digital: ${treasure.digital}<br/>- Physical ${treasure.physical}
                </div>
                <Entry />
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

*/
export default Ledger;