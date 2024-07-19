import './App.css';
import {useState} from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Calendar from './calendar.js'
import AddNote from './stickynotes.js'
import NoteList from './notesList.js'
import Check from './checklist.js'
import "./Check.css";

const Title = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ea9ab2',
  fontSize: 80,
  fontWeight:700,
  padding: theme.spacing(1),
  textAlign: 'center',
  marginBottom: 15,
  color: 'white',
}));

const Stickynotes = styled(Paper)(({ theme }) => ({
  backgroundColor: '#d7a4f9',
  fontSize:20,
  fontWeight:700,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: "white",
}));


function App() {
  const [notes, setNotes] = useState(['password: 123abc', 'dont forget to breath']);

  const addStrToArray = (str) =>{
    const copyOfNotes = Array.from(notes);
    copyOfNotes.push(str);
    setNotes(copyOfNotes);
  }
  return (
    <div>
     <Box sx={{ flexGrow: 1 }}>
      <Grid container = {true} columns = {1}>
        <Grid xs={12} sm={12} md={12} lg={10}>
          <Title elevation={1}>
            Planner
          </Title>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid xs>
        <theme>
          <Stickynotes elevation={9}>Sticky Notes</Stickynotes>
          <AddNote
          addNote={ addStrToArray }/>
          <NoteList
          notes={ notes }
          />
          </theme>
        </Grid>
        <Grid xs={6}>
          <Calendar />
        </Grid>
        <Grid xs>
          <Check/>
        </Grid>
      </Grid>
    </Box> 
    </div>
  );
}

export default App;
