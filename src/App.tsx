import { nanoid } from 'nanoid';
import React, { FC, useState, ChangeEvent } from 'react';
import './App.scss';
import NotesList from './components/NotesList/NotesList';
import { TNote } from './types/types';
import Search from './components/Search/Search';
import Header from './components/Header/Header';
import { createDate } from './helpers/createDate';

export const App: FC = () => {

  const [notes, setNotes] = useState<TNote[]>([
    { 
      id: nanoid(),
      text: 'This is my first note',
      date: createDate()
    },
    { 
      id: nanoid(),
      text: 'This is my second note',
      date: createDate()
    },
    { 
      id: nanoid(),
      text: 'This is my third note',
      date: createDate()
    },
  ]);
  const [searchText, setSearchText] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleSearchNote = (event: ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value);
  const filteredNotes = notes.filter(note => note.text.toLowerCase().includes(searchText.toLowerCase()));

  const addNote = (newNote: TNote) => {
    setNotes([...notes, newNote]);
  }

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => id !== note.id));
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="App">
        <Header handleTogglerDarkMode={setDarkMode}/>
        <Search handleSearchNote={handleSearchNote} />
        <NotesList notes={filteredNotes} addNote={addNote} deleteNote={deleteNote}/>
      </div>
    </div> 
  );
}