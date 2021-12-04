import Slide from "./slider";
import MinMax from "./switch";
import TextInput from "./textInput";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/system";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

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
        right: 50,
        top: 50,
        zIndex: 9,
        padding: 20,
        paddingBottom: 30,
    }} sx={{
      border: 1,
      
        width: 300,
        borderRadius: 1,
        backgroundColor: 'green',
        opacity: [1.0,1.0,1.0],
      }}>
      <Box sx={{ width: '100%', maxWidth: 300 }}>
        <Typography variant="subtitle2" gutterBottom component="div">
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur  subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur  subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Typography>
      </Box>
   
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