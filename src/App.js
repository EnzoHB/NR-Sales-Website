import React from 'react';
import Ledger from './Components/Ledger.js';
import { ledger } from './App/init.js';

const items = ledger.history.map(entry => {
  console.log(entry);
})
function App() {
  const width = '450px';
  const focus = 'Caixa';
  const shortForm = false;
  const noteVisibility = false;

  return (
    <>
      <Ledger width={width} focus={focus} shortForm={shortForm} noteVisibility={noteVisibility}></Ledger>
    </>
  )
}

// <Ledger width={width} focus={focus} items={ledger.history} shortForm={shortForm} noteVisibility={noteVisibility}/>

export default App;
