import React, { Component, createRef, useEffect, useState } from 'react'
import Note from './Note';

class Entry extends Component {
    constructor(props) {
        super(props);

        var { entry } = props;
        var { focus } = props;
        var { hidden } = props

        this.entry = entry;
        this.state = { 
            focus: null || focus,
            entryHidden: false,
            noteHidden: hidden || false,
        };

        this.references = {
            note: createRef()
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
    };

    handleButtonClick(event) {
        this.setState({ note: !this.state.note });
        this.references.note.current.toggle()
    };

    hidden(boolean) {
        this.setState({ entryHidden: boolean });
    };

    render() {
        return (
            <div className={this.state.entryHidden? 'entry hide' : 'entry'}>
                <div className="body centralize">
                    < Operation entry={this.entry} />
                    < Amount focus={this.state.focus} entry={this.entry} />
                    < Text entry={this.entry} test={this.state.note}/>

                    <div className="button centralize" onClick={this.handleButtonClick}>
                        <div className='c'></div>
                        <div className="i"></div>
                    </div>
                </div>
                < Note ref={this.references.note} entry={this.entry} hidden={!this.state.note} />
            </div>
        );
    };
}

export default Entry;

function Operation({ entry }) {
    var text;
    var color;

    switch(entry.operation) {
        case 'donation': text = 'D'; color = '#EAC503'; break;
        case 'payment':  text = 'P'; color = '#B252ED'; break;
        case 'receipt':  text = 'R'; color = '#FFA500'; break;
        case 'lent':     text = 'L'; color = '#EAC503'; break;
    }

    return (
        <div className='indicator operation centralize' style={{ backgroundColor: color }}>{text}</div> 
    )
};

function Text({ entry }) {
    var verb;

    switch(entry.operation) {
        case 'donation': verb = 'donates to'; break;
        case 'receipt' : verb = 'receives from'; break;
        case 'payment' : verb = 'pays'; break;
        case 'lent' :    verb = 'lends to';  break;
    };

    return (
        <div className='text centralize'>
            {`${entry.subject} ${verb} ${entry.target}`}
        </div>
    );
};

function Amount({ focus, entry }) {
    var color;
    var grey = '#707070'
    var red = '#E86565'
    var green = '#00C67E';

    entry.subject == focus? 

    entry.operation == 'receipt'?
        color = green :
        color = red :

    entry.target == focus? 
    
    entry.operation == 'receipt' ?
        color = red:
        color = green :

    color = grey;

    return (
        <div className='indicator amount centralize' style={{ backgroundColor: color }}>
            {entry.amount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}
        </div> 
    )
};