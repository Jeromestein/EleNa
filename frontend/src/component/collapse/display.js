import * as React from 'react';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import Box from '@mui/material/Box';
export default function SwitchDisplay(props) {
  if (!props.off){
    return (
    
      <UnfoldMoreIcon onClick={e=>props.ape()}/>
    );
  }

  else{
    return (
      <UnfoldLessIcon onClick={e=>props.ape()}/>
    )
  }
  
}