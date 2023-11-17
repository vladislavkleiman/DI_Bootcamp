import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

const NoteDiaryComponent = () => {
  // Initialize with a sample note
  const [notes, setNotes] = useState([
    { title: "Sample Note", content: "This is a sample note content." },
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [expandedNote, setExpandedNote] = useState(null);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleNoteChange = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  };

  const saveNote = () => {
    setNotes([...notes, newNote]);
    setNewNote({ title: "", content: "" });
    handleDialogClose();
  };

  const toggleNote = (index) => {
    setExpandedNote(expandedNote === index ? null : index);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleDialogOpen}
        style={{ backgroundColor: "black" }}
      >
        Add Note
      </Button>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Add a New Note</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            name="title"
            value={newNote.title}
            onChange={handleNoteChange}
          />
          <TextField
            margin="dense"
            id="content"
            label="Content"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="standard"
            name="content"
            value={newNote.content}
            onChange={handleNoteChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={saveNote}>Save</Button>
        </DialogActions>
      </Dialog>

      <List>
        {notes.map((note, index) => (
          <React.Fragment key={index}>
            <ListItemButton onClick={() => toggleNote(index)}>
              <ListItemText primary={note.title} />
            </ListItemButton>
            <Collapse in={expandedNote === index} timeout="auto" unmountOnExit>
              <ListItemText inset secondary={note.content} />
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default NoteDiaryComponent;
