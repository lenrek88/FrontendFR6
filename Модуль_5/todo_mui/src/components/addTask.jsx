import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { useTaskDispatch } from '../context/TaskContext';

export default function AddTask() {
   const [text, setText] = useState('');
   const dispatch = useTaskDispatch();

    return (
        <>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', m: '32px'}}>
        <TextField id="input-with-sx" label="Имя новой задачи" variant="standard" sx={{width: '100%'}}
        value={text}
        onChange={e => setText(e.target.value)}
        />
          <IconButton 
          sx={{color:'#2196F3'}}
          onClick={ e => {
            setText('')
                dispatch({
                  type: 'added',
                  id: nextId++,
                  text: text,
                })
            }}>
                <AddIcon></AddIcon>
            </IconButton>
      </Box>
      </>
    );
}

let nextId = 4;