import * as React from 'react';
import Switch from '@mui/material/Switch';
import { Container, Typography } from '@mui/material';
import { Stack } from '@mui/material';

export default function MinMax() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Container>
    <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Min</Typography>
        <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
        />
        <Typography>Max</Typography>
    </Stack>
    </Container>
    
  );
}
