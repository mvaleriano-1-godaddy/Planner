import {useState} from "react"

function Note() {
    const [textAreaValue, setTextAreaValue] = useState(' ');

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('Add to notes', textAreaValue);
        setTextAreaValue('');
    }
    
    return (
        <form onSubmit= {handleSubmit}>
        <label htmlFor = 'note-textarea'> Enter yout notes </label>
        <textarea
        id = 'note-textarea'
        value = { textAreaValue }
        name = 'note'
        onChange ={ (event)=>{
            setTextAreaValue(event.target.value);
        }}
        placeholder = 'ideas?'>
            </textarea>
        <button type ='submit'>
            Done with Idea
        </button>

        </form>
    )
}
export default Note;