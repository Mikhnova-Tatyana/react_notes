import React, { FC, useMemo } from 'react';
import classes from './Note.module.scss';
import { MdDeleteForever as DeleteIcon } from 'react-icons/md';
import { TNote } from '../../types/types';

interface INote {
  note: TNote;
  deleteNote: (id: string) => void;
}

const Note: FC<INote> = ({note, deleteNote}) => {

  const deleteNoteHandler = () => {
    deleteNote(note.id);
  }

  return (
    <div className={classes.note}>
    <span className={classes.note__text}>{note.text}</span>
    <div className={classes.note__footer}>
      <span>{note.date}</span>
      <DeleteIcon className={classes.icon_delete} onClick={deleteNoteHandler}/>
    </div>
  </div>
  )
}

export default Note;