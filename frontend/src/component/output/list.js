import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { List } from '@mui/material';



export default function Listed(props) {

  function renderRow(point,index) {
  
    return (
      <ListItem  key={index} component="div" disablePadding
      >
        <ListItemButton>
          <ListItemText primary={`${index} go to ${point}`} />
        </ListItemButton>
      </ListItem>
    );
  }

  return (

      <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      >
         {props.route.map((value,i) => (
    renderRow(value,i)
  ))}
      </List>

  );
}
