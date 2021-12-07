import Slide from "./slider";
import MinMax from "./switch";
import TextInput from "./textInput";
import { TextField } from "@mui/material";
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

export default function Menu(props) {
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
      <Box sx={{ width: '100%', maxWidth: 300, paddingBottom:2 }}>
        <Typography variant="subtitle2" gutterBottom component="div">
        EleNa (Elevation-based Navigation) is a routing software that calculates routes based on your preference of route elevation. You may maximize or minimize elevation, while limiting the distance efficiency relative to the shortest route.
        </Typography>
      </Box>
   
      <Stack spacing={2}>
        <Item><TextField label="Source" value={props.source} onChange={(event)=>{props.setSource(event.target.value);}}/></Item>
        <Item><TextField label="Destination" value={props.destination} onChange={(event)=>{props.setDestination(event.target.value);}}/></Item>
        <Item><MinMax setMax={props.setMax}/></Item>
        <Item><Slide percentage={props.percentage} setPercentage={props.setPercentage}/></Item>
        <Button variant="contained" onClick={()=>{props.submit()}}>Search</Button>
  
      </Stack>
    </Box>
  );
}