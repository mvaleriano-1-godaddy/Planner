import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

const Title = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.h5,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const CalendarContainer = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1Agfdm' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 30,
    height: 0,
    padding: theme.spacing(2.5),
    ...theme.typography.body2,
    textAlign: 'left-top' ,
  }));
  const DemoPapers = styled(Paper)(({ theme }) => ({
    width: 20,
    height: 0,
    padding: theme.spacing(2.5),
    ...theme.typography.caption,
    textAlign: 'center' ,
  }));

function Calendar(){
    const calendarContent =[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
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
                <Grid xs={12} sm={12} md={12} lg={12}>
                    <Title elevation={0}>
                        Calendar
                    </Title>
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={7}>
                {
                    calendarContent.slice(0, 7).map((item, index) => (
                        <Grid key={index} xs={1} sm={1} md={1} lg={1}>
                            <DemoPapers elevation= {0}>{item}</DemoPapers>
                        </Grid>
                    ))}
                    {calendarContent.slice(7).map((item,index) => (
                        <Grid key = {index} xs={1} sm={1} md={1} lg={1}>
                            <DemoPaper variant = "outlined">{item}</DemoPaper></Grid>
                    
                    ))}
                    
                

             </Grid>
        </CalendarContainer>
    )
}

export default Calendar;