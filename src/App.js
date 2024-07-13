import './App.css';
import {useState} from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Calendar from './calendar.js'
import Note from './stickynotes.js'
import NoteList from './notesList.js'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Title = styled(Paper)(({ theme }) => ({
  backgroundColor: '#F5eee7',
  ...theme.typography.h3,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function App() {
  const [notes, setNotes] = useState(['fruits, pick up keys']);

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
          <Note/>
          <NoteList/>
        </Grid>
        <Grid xs={7}>
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
