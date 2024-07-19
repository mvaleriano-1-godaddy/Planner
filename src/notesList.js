import{styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./Check.css";

const StyledLi = styled('li')(({ theme }) => ({
    borderRadius: theme.spacing(2), 
    boxShadow: theme.shadows[4], 
    minHeight: 96, 
    fontSize: "1.25rem", 
    backgroundColor: "#d7a4f9", 
    marginBottom: theme.spacing(6),
    paddingTop: theme.spacing(6), 
    paddingLeft: theme.spacing(0), 
    paddingBottom: theme.spacing(6), 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
function NoteList({notes}){
    console.log('[DEBUG] props',notes);
    return (
        <ul>
            { notes.map((note, index) =>
             <StyledLi key={index}
             >
                
                 {note} 
            </StyledLi> )
            }
        
        </ul>
    )
}

export default NoteList;