import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/system";
import { styled } from '@mui/material/styles';
import Listed from "./list";
import { Divider, Typography } from '@mui/material';
import { Collapse } from '@mui/material';
import SwitchDisplay from '../collapse/display';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Display(props) {
  function SwitchD(){
    setDC(!DC);
  }

  let [DC, setDC] = useState(true);
  
  return (
    
    <Box style={{
        position: "absolute",
        left: 50,
        top: 50,
        zIndex: 9,
        padding: 20,
        paddingBottom: 50,
    }} sx={{
        border: 1,
        width: 360,
        backgroundColor: 'green',
        opacity: [1.0,1.0,1.0],
      }}>
   

   
      <Typography variant="subtitle1" gutterBottom component="div">
        Elevation {props.stat[0]}
      </Typography>
      <Divider/>
      <Typography variant="subtitle1" gutterBottom component="div">
        Distance {props.stat[1]}
      </Typography>
      <Divider/> 
      <SwitchDisplay ape={SwitchD} off={DC}/>
      <Collapse in={DC} >

      <Listed route={props.route}/>
      </Collapse>  
    </Box>
    
  );
}