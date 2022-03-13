import React, { Component } from 'react' 
import { nanoid } from 'nanoid';

class Note extends Component {
    constructor(props) {
        super(props);

        var { hidden } = props;
        var { note } = props.entry;

        this.state = { hidden };
        this.note = note;
    };

    toggle(boolean) {
        this.setState({ hidden: !this.state.hidden });
    };

    render() {
        return (
            <div className={this.state.hidden? 'note hide' : 'note'}>
                {
                    typeof this.note == 'string'? 
                        <Default string={this.note} /> :
                        <Receipt receipt={this.note} />
                }
            </div>
    )
  }
}

function Default({ string }) {
    return (
        <>
            <div className='title'>
                <hr/><div className='header centralize'>Note</div><hr/>
            </div>
            <div className='content'>{string}</div>
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
                Total: {receipt.total.toLocaleString(...locale)}
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
                <td>{item.price?.toLocaleString(...locale)}</td>
                <td>{item.amount} {item.amount > 1? 'Units': 'Unit'}</td>
            </tr>
        );
    };
};

export default Note;
