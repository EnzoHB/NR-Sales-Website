import React from 'react';
import Screen from './Components/Screen'
import { ledger } from './App/init.js';
import { Box } from '@mui/system';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Screen/>
    </Box>
  )
}

// <Ledger width={width} focus={focus} items={ledger.history} shortForm={shortForm} noteVisibility={noteVisibility}/>

export default App;
