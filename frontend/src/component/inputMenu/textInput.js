import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextInput(props) {
  return (

      <TextField fullWidth label={props.label} id="fullWidth" />
    
  );
}
