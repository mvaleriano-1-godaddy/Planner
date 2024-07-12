import './App.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Calendar from './calendar.js'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Title = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.h3,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function App() {
  return (
    <div>
     <Box sx={{ flexGrow: 1 }}>
      <Grid container = {true} columns = {1}>
        <Grid xs={12} sm={12} md={12} lg={12}>
          <Title elevation={0}>
            Planner
          </Title>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid xs>
          <Item>sticky note</Item>
        </Grid>
        <Grid xs={6}>
          <Calendar />
        </Grid>
        <Grid xs>
          <Item>to do list</Item>
        </Grid>
      </Grid>
    </Box> 
    </div>
  );
}

export default App;
