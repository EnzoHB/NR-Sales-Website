import React, { useState, createRef, Component } from 'react';
import Entry from './Entry';
import Flex from './Flex';

import { Box, Switch, TextField, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material';
import { ledger } from '../App/ledger.js'

function Ledger() {

    const [ flow, setFlow ] = useState(1);
    const [ focus, setFocus ] = useState('Caixa');

    const Body = styled(Box)(({ theme }) => ({
        width: '315',
    }));

    // ------------------ Handlers ---------------------------- //

    const handleSwitchChange = event => setFlow(event.target.checked? 1 : -1);
    const handleTextInput = event => setFocus(event.target.value);

    // ----------------- Handling Stuff  -------------------- //

    try {

        const { every, some } = ledger.profile.get(focus).fetch();
        const items = flow === 1? 
    
        every({ target : () => focus }) : 
        every({ subject: () => focus }) ;

    return (
        <Body>
            <Flex>
                <TextField id="standard-basic" label="Focus" variant="standard" defaultValue={'Caixa'} onChange={handleTextInput}/>
                <FormControlLabel control={ <Switch onChange={handleSwitchChange} checked={flow == 1? true : false}/> } label='Outcome / Income' />
            </Flex>
            <EntriesDisplay items={items} flow={flow}/>
        </Body>
    )

    } catch(error) {
        return <></>
    };
};


function EntriesDisplay({ items, flow }) {
    const prop = flow == 1? 'subject' : 'target';

    return (
        <Flex direction='column-reverse'>
            {items.map(item => <Entry key={item.id} name={item[prop]} flow={flow} amount={item.amount} />)}
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