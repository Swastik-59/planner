import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';


function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [KeepNote, setNote] = useState({
    title: "",
    content: ""
  });

  function HandleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    });
  }

  const SubmitNote = async (event) => {
    props.onAdd(KeepNote);
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  };

  function Expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note" method="POST">
        {isExpanded && <input onChange={HandleChange} name="title" placeholder="Title" value={KeepNote.title} />}

        <textarea onClick={Expand} onChange={HandleChange} name="content" placeholder="Take a note..." rows={isExpanded ? "3" : "1"} value={KeepNote.content} required />

        {isExpanded && <Zoom in={true}>
          <Fab onClick={SubmitNote} >
            <AddIcon />
          </Fab>
        </Zoom>}
      
      </form>
    </div>
  );
}

export default CreateArea;