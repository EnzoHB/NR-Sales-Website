import React from 'react';
import Ledger from './Components/Ledger.js';
import { ledger } from './App/ledger.js'

function App() {
  const width = '450px';
  const focus = 'Caixa';
  const shortForm = false;
  const noteVisibility = false;

  return (
    <>
      <Ledger width={width} focus={focus} items={ledger.history} shortForm={shortForm} noteVisibility={noteVisibility}/>
    </>
  )
}

export default App;
