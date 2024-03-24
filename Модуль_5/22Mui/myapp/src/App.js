import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [state, setState] = useState('');


  return (
    <div className="App">
      <header className="App-header">
      <Box
      height={600}
      width={600}
      my={4}
      display="flex"
      alignItems="center"
      gap={2}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      This Box uses MUI System props for quick customization.
      <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          maxRows={4} 
          onChange={(e) => setState(e.target.value)}
        />
        <Button variant="contained" onClick={() => alert(state)}>Contained</Button>
    </Box>
      </header>
    </div>
  );
}

export default App;
