import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0 %',
  },
  {
    value: 100,
    label: '100 %',
  },
];

function valuetext(value) {
  return `${value} %`;
}

export default function Slide() {
  return (
    <Container sx={{ width: 290 }} >
      <Slider
        aria-label="Always visible"
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Container>
  );
}
