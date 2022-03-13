import React from 'react';
import Entry from './Components/Entry.js';
import './Styles/Entry.css';
import './Styles/Note.css';
import './Styles/index.css';
import { ledger } from './App/ledger.js'

const FOCUS = 'Caixa';

function App() {
  return (
    <div className='ledger'>
      {ledger.history.map(entry => <Entry key={entry.id} entry={entry} focus={FOCUS} hidden={true}/>)}
    </div>
  );
}

export default App;
