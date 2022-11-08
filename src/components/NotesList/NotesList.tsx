import React, { FC, useMemo } from 'react';
import classes from './NotesList.module.scss'
import Note from '../Note/Note';
import { TNote } from '../../types/types';
import CreateNote from '../CreateNote/CreateNote'

interface INotesList {
  notes: TNote[];
  addNote: (note: TNote) => void;
  deleteNote: (id: string) => void;
}

const NotesList:FC<INotesList> = ({notes, addNote, deleteNote}) => {

  const notesList = useMemo(() => {
    return notes.map(note => 
      <Note key={note.id} note={note} deleteNote={deleteNote} />
      )
  }, [notes]) 

  return (
    <div className={classes.list}>
      {notesList}
      <CreateNote addNote={addNote} />
    </div>

  )
}

export default NotesList;