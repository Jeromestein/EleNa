import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/system";
import { styled } from '@mui/material/styles';
import Listed from "./list";
import { Divider, Typography } from '@mui/material';
import { Collapse } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Display() {
  return (
    <Collapse in={false} >
    <Box style={{
        position: "absolute",
        left: 50,
        top: 50,
        zIndex: 9,
        padding: 20,
        paddingBottom: 50,
    }} sx={{
        border: 1,
        backgroundColor: 'green',
        opacity: [0.9, 0.8, 0.7],
        '&:hover': {
            opacity: [1.0,1.0,1.0],
          },
      }}>
   


      <Typography variant="subtitle1" gutterBottom component="div">
        Elevation 100
      </Typography>
      <Divider/>
      <Typography variant="subtitle1" gutterBottom component="div">
        Distance 100
      </Typography>
      <Divider/>
       
  
      

      <Listed/>
    </Box>
    </Collapse>
  );
}