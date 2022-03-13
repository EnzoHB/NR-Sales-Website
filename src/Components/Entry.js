import React, { Component } from 'react'
import { nanoid } from 'nanoid'

class Entry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shortForm: props.shortForm,
            isNoteVisible: props.isNoteVisible
        }
    };

    handleButtonClick(event) {
        this.setState({ isNoteVisible: !this.state.isNoteVisible })
    };

    render() {

        return (
            <div className={this.props.isVisible? 'entry': 'entry hide'}>
                <div className='body centralize'>
                    <Operation operation={this.props.operation} />
                    <Amount 
                        focus={this.props.focus}
                        amount={this.props.amount}
                        target={this.props.target}
                        subject={this.props.subject}
                        operation={this.props.operation}
                    />
                    {this.state.shortForm? <></> : 
                    <Text 
                        subject={this.props.subject} 
                        target={this.props.target} 
                        operation={this.props.operation}
                    />}
                    {this.state.shortForm? <></> : <Button onClick={this.handleButtonClick.bind(this)} />}
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
        <div className='indicator operation centralize' style={{ backgroundColor: color }}>{text}</div> 
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
        <div className='text centralize'>
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
        <div className='indicator amount centralize' style={{ backgroundColor: color }}>
            {Number(amount).toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}
        </div> 
    )
};

function Button({ onClick }) {
    return (
        <div className='button centralize' onClick={onClick}>
            <div className='c'></div>
            <div className='i'></div>
        </div>
    );
};

function Content({ string }) {
    return (
        <>
            <div className='title'>
                <hr/><div className='header centralize'>Note</div><hr/>
            </div>
            <div className='content centralize'>{string}</div>
        </>
    )
};

function Receipt({ receipt }) {

    var locale = ['pt-br', {style: 'currency', currency: 'BRL'}];

    return (
        <>
            <div className='title'>
                <hr/><div className='header centralize'>Receipt</div><hr/>
            </div>
            <div className='name'>{receipt.name}</div>
            <div className='total'>
                Total: {Number(receipt.total).toLocaleString(...locale)}
            </div>
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
                        {receipt.items.map(item => < TableRow key={nanoid()} item={item} locale={locale}/>)}
                    </tbody>
                </table>
            </div>
        </>
    )

    function TableRow({ item, locale }) {
        return (
            <tr>
                <td>{item.name}</td>
                <td>{Number(item.price)?.toLocaleString(...locale)}</td>
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