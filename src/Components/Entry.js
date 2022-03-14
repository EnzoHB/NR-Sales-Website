import React, { Component, useState } from 'react'
import '../Styles/Entry.css';
import { nanoid } from 'nanoid'

class Entry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shortForm: props.shortForm,
            isNoteVisible: props.isNoteVisible,
            wasNoteVisible: props.isNoteVisible
        }
    };

    handleNoteButtonClick(event) {
        this.setState({ 
            isNoteVisible: !this.state.isNoteVisible,
            wasNoteVisible: !this.state.wasNoteVisible 
        })
    };

    handleShortButtonClick() {
        this.setState({ 
            shortForm: !this.state.shortForm,
            isNoteVisible: !this.state.isNoteVisible && this.state.wasNoteVisible,
        })
    };

    render() {
        var hide = this.props.isVisible? '' : 'hide';
        var alone = this.props.isAlone? 'alone' : '';;

        const entry = ['entry', hide, alone].join(' ').trim();

        var hide = this.state.shortForm? 'hide' : '';

        const container = ['container', hide].join(' ').trim()

        return (
            <div className={entry}>
                <div className='body'>
                    <div className='container'>
                        <div className='indicators'>
                            <Operation operation={this.props.operation} />
                            <Amount 
                                focus={this.props.focus}
                                amount={this.props.amount}
                                target={this.props.target}
                                subject={this.props.subject}
                                operation={this.props.operation}
                            />
                        </div>
                        <ShortButton onClick={this.handleShortButtonClick.bind(this)} />
                    </div>
                    <div className={container}>
                        {this.state.shortForm? <></> : 
                        <Text 
                            subject={this.props.subject} 
                            target={this.props.target} 
                            operation={this.props.operation}
                        />}
                        {this.state.shortForm? <></> : <NoteButton onClick={this.handleNoteButtonClick.bind(this)} />}
                    </div>
                </div>
                <div className={this.state.isNoteVisible? 'note': 'note hide'}>
                    {
                        typeof this.props.note == 'string'? 
                        <Content string={this.props.note} /> :
                        <Receipt receipt={this.props.note} />
                    }
                </div>
            </div>
        )
    }
};

export default Entry;

function Operation({ operation }) {
    var text;
    var color;

    switch(operation) {
        case 'donation': text = 'D'; color = '#EAC503'; break;
        case 'payment':  text = 'P'; color = '#B252ED'; break;
        case 'receipt':  text = 'R'; color = '#FFA500'; break;
        case 'lent':     text = 'L'; color = '#EAC503'; break;
        default:         text = 'U'; color = '#AEAEAE';
    }

    return (
        <div className='indicator operation' style={{ backgroundColor: color }}>{text}</div> 
    )
};

function Text({ subject, target, operation }) {
    var verb;

    switch(operation) {
        case 'donation': verb = 'donated to'; break;
        case 'receipt' : verb = 'received from'; break;
        case 'payment' : verb = 'payed'; break;
        case 'lent' :    verb = 'lent to';  break;
        default :        verb = 'did something for';
    };

    return (
        <div className='text'>
            {`${subject || 'Someone'} ${verb} ${target || 'Somebody'}`}
        </div>
    );
};

function Amount({ focus, subject, target, operation, amount }) {
    var color;
    var grey = '#707070'
    var red = '#E86565'
    var green = '#00C67E';

    subject == focus? 

    operation == 'receipt'?
        color = green :
        color = red :

    target == focus? 
    
    operation == 'receipt' ?
        color = red:
        color = green :

    color = grey;

    return (
        <div className='indicator amount' style={{ backgroundColor: color }}>
            {Number(amount).toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}
        </div> 
    )
};

function NoteButton({ onClick }) {
    return (
        <div className='button'>
            <div className='circle' onClick={onClick}>
                <div className='c'></div>
                <div className='i'></div>
            </div>
        </div>
    );
};

function ShortButton({ onClick, shortForm }) {
    const longFormStyle = { transform: 'rotate(0.25turn)'}
    const shortFormStyle = { };

    var [ shortForm, setShortForm ] = useState(shortForm);

    const handleClick = event => (setShortForm(!shortForm), onClick(event)); 

    return (
        <div className='button'>
            <div className='circle' onClick={handleClick}>
                <div className='i' style={shortForm? shortFormStyle: longFormStyle}></div>
            </div>
        </div>
    );
};

function Content({ string }) {
    return (
        <>
            <div className='header'>
                <div className='line' />
                <div className='title'>Note</div>
                <div className='line' />
            </div>
            <div className='content'>{string}</div>
        </>
    )
};

function Receipt({ receipt }) {
    return (
        <>
            <div className='header'>
                <div className='line' />
                <div className='title'>Receipt</div>
                <div className='line' />
            </div>
            <div className='info'>
                <div className='name'>{receipt.name}</div>
                <div className='total'>Total: {Number(receipt.total).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</div>
                <div className='table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {receipt.items.map(item => < TableRow key={nanoid()} item={item}/>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )

    function TableRow({ item }) {
        return (
            <tr>
                <td>{item.name}</td>
                <td>{Number(item.price)?.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</td>
                <td>{item.amount} {item.amount > 1? 'Units': 'Unit'}</td>
            </tr>
        );
    };
};

/**
 * Entry {
 *  id
 * 
 *  state: {
 *      focus:
 *      subject,
 *      target,
 *      operation,
 *      amount,
 *      visible,
 *      classes,
 *      note: {
 *          visible,
 *          value,
 *      }
 *  }
 * 
 * 
 * }
 */