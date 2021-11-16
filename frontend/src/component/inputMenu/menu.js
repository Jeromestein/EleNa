import Slide from "./slider";
import MinMax from "./switch";
import TextInput from "./textInput";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/system";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Menu() {
  return (
    <Box style={{
        position: "absolute",
        left: 50,
        top: 50,
        zIndex: 9,
        padding: 20,
        paddingBottom: 50,
    }} sx={{
        width: 300,
        height: 360,
        backgroundColor: 'green',
        opacity: [0.9, 0.8, 0.7],
        '&:hover': {
            opacity: [1.0,1.0,1.0],
          },
      }}>
   
      <Stack spacing={2}>

        <Item><TextInput label="Source"/></Item>
        <Item><TextInput label="Destination" /></Item>
        <Item><MinMax/></Item>
        <Item><Slide/></Item>
        <Button variant="contained">Search</Button>
  
      </Stack>
    </Box>
  );
}