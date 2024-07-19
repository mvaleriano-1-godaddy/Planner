
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./Check.css";

const Title = styled(Paper)(({ theme }) => ({
  backgroundColor: "#F5eee7",
  ...theme.typography.h3,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const RoundedTextarea = styled("textarea")({
    width: "100%",
    marginTop: 10,
    marginBottom:10,
    padding: 10,
    borderRadius: 8, 
    fontSize: 25,
    fontWeight:200,
    border: "1px solid #ccc",
    resize: "vertical",
    boxSizing: "border-box",
  });

function AddNote({ addNote }) {
  const [textareaValue, setTextareaValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addNote(textareaValue.trim());
    setTextareaValue("");
  };

  const handleChange = (event) => {
    setTextareaValue(event.target.value);
  };
  const RoundedButton = styled(Button)({
    borderRadius: 20,
    marginBottom:10,
    backgroundColor: "#BF6CF6", 
    color: "#ffffff", 

    "&:hover": {
      backgroundColor: "#B351F4", 
    },
  });
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10} sm={10} md={10}> {/* Adjust the Grid item size based on your design */}
          <form onSubmit={handleSubmit}>
            <RoundedTextarea
              id="note-textarea"
              name="note"
              value={textareaValue}
              onChange={handleChange}
              placeholder="Add your notes here..."
              rows={4} 
              style={{ width: "100%", marginTop: 10, padding: 10 }}
            />
            <RoundedButton type="submit">Done with Idea</RoundedButton>
          </form>
        
      </Grid>
    </Grid>
  );
}

export default AddNote;
