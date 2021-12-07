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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

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

    const [open1, setOpen1] = React.useState(false);
    const handleClick1 = () => {
        setOpen1(!open1);
    };
    const [open2, setOpen2] = React.useState(false);
    const handleClick2 = () => {
        setOpen2(!open2);
    };

    return (

        <Box style={{
            position: "absolute",
            left: 50,
            top: 50,
            zIndex: 9,
            padding: 20,
            paddingBottom: 40,
        }} sx={{
            border: '1px dashed grey',
            backgroundColor: 'lightgreen',
            opacity: [1.0,1.0,1.0],
        }}>



            <Typography variant="h6" gutterBottom component = "div" align = "left" >
                Elevation: {props.stat[0]}
            </Typography>
            <Divider/>
            <Typography variant="h6" gutterBottom component = "div" align = "left" >
                Distance: {props.stat[1]}
            </Typography>
            <Divider/>
            <Typography variant="subtitle1" gutterBottom component = "div" align = "left" >
                From: {props.route[0][0].toFixed(6)}, {props.route[0][1].toFixed(6)}
            </Typography>
            <SwitchDisplay ape={SwitchD} off={DC}/>
            <Collapse in={DC} >
                <List>
                    <ListItemButton onClick={handleClick1}>
                        <ListItemText
                            primary={
                                <React.Fragment>
                                    <Typography variant="subtitile1" gutterBottom component = "div" align = "left">
                                        {props.route[0][0].toFixed(6)}, {props.route[0][1].toFixed(6)} to {props.route[1][0].toFixed(6)}, {props.route[1][1].toFixed(6)}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        {open1 ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open1} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Left Turn on 1st St." />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemText primary="Right Turn on 2nd St." />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={handleClick2}>
                        <ListItemText
                            primary={
                                <React.Fragment>
                                    <Typography variant="subtitile1" gutterBottom component = "div" align = "left">
                                        {props.route[1][0].toFixed(6)}, {props.route[1][1].toFixed(6)} to {props.route[2][0].toFixed(6)}, {props.route[2][1].toFixed(6)}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        {open2 ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Left Turn on 1st St." />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemText primary="Right Turn on 2nd St." />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Collapse>
            <Typography variant="subtitle1" gutterBottom component = "div" align = "left" >
                To: {props.route[2][0].toFixed(6)}, {props.route[2][1].toFixed(6)}
            </Typography>
        </Box>

    );
}