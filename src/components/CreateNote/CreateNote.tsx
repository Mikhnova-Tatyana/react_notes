import React, {FC, ChangeEvent, useState, useCallback} from 'react';
import classes from './CreateNote.module.scss';
import { TNote } from '../../types/types';
import { nanoid } from 'nanoid';
import { CHARACTER_LIMIT } from '../../constants/constants';
import { createDate } from '../../helpers/createDate'

interface CreateNote {
  addNote: (note: TNote) => void;
}

const CreateNote: FC<CreateNote> = ({addNote}) => {
  const [noteText, setNoteText] = useState<string>('');

  const charactersRemainder = CHARACTER_LIMIT - noteText.length;

  const noteTextHandler = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    if (CHARACTER_LIMIT - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  }, [])

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      let newNote: TNote = {
        id: nanoid(),
        text: noteText,
        date: createDate()
      }
      addNote(newNote);
      setNoteText('');
    }
  }

  return (
    <div className={classes.note}>
      <textarea 
        placeholder="Type to add a note.."
        value={noteText} 
        onChange={noteTextHandler}
      >
      </textarea>
      <div className={classes.note__footer}>
        <span>{charactersRemainder} Remaining</span>
        <button className={classes.save} onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  )
}

export default CreateNote;