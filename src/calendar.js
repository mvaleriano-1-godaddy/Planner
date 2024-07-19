import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import "./App.css";


const Title = styled(Paper)(({ theme }) => ({
    backgroundColor: '#b3dee2',
    fontSize: 25,
    fontWeight:700,
    marginBottom:20,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "white",
  }));

  const CalendarContainer = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1Agfdm' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 30,
    height:0,
    padding: theme.spacing(2.5),
    fontSize:15,
    textAlign: 'center' ,
  }));
  const DemoPapers = styled(Paper)(({ theme }) => ({
    width: 20,
    height:0,
    padding: theme.spacing(2),
    fontSize:15,
    textAlign: "center",
    display: 'flex',
  }));
  const GridCell = styled(Grid)(()=>({
    textAlign: 'center',
    margin:'auto',
  }))

function Calendar(){
    const calendarContent =[
        "Sun",
        "Mon",
        "Tues",
        "Wed",
        "Thur",
        "Fri",
        "Sat",
        " ",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19", 
        "20", 
        "21", 
        "22", 
        "23", 
        "24", 
        "25", 
        "26", 
        "27", 
        "28", 
        "29", 
        "30", 
        "31",
        " ",
        " ",
        " "
    ]
    return (
        <CalendarContainer>
            <Grid container={true} columns={1}>
                <Grid container={true} columns={1}>
                    <Grid xs={12} sm={12} md={12} lg={12}>
                        <Title elevation={0}>
                            Calendar
                        </Title>
                    </Grid>
                </Grid>
                <Grid container spacing={2} columns={7}>
                    {
                        calendarContent.slice(0, 7).map((item, index) => (
                            <GridCell key={index} xs={1} sm={1} md={1} lg={1} item alignItems='center' >
                                <DemoPapers elevation= {0}>{item}</DemoPapers>
                            </GridCell>
                        ))}
                        {calendarContent.slice(7).map((item,index) => (
                            <GridCell key = {index} xs={1} sm={1} md={1} lg={1} item alignItems='center'>
                                <DemoPaper variant = "outlined">{item}</DemoPaper></GridCell>
                        
                        ))}
                </Grid>
            </Grid>
        </CalendarContainer>
    )
}

export default Calendar;