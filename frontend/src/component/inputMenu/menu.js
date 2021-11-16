import Slide from "./slider";
import MinMax from "./switch";
import TextInput from "./textInput";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/system";
import { styled } from '@mui/material/styles';

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
        left: 100,
        top: 100,
        zIndex: 9,
        backgroundColor: 'primary.dark',
    }} sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
      }}>
   
      <Stack spacing={2}>

        <Item><TextInput/></Item>
        <Item><TextInput/></Item>
        <Item><MinMax/></Item>
        <Item><Slide/></Item>
  
      </Stack>
    </Box>
  );
}