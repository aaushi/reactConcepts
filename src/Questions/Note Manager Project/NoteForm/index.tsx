import React, { useState, useEffect } from 'react';
import "./index.css";
import { Note } from '../../types/Note';

export interface NoteFormProps {
  onSubmit: (note: Note) => void;
  noteToEdit?: Note;
}

const NoteForm: React.FC<NoteFormProps> = ({ onSubmit, noteToEdit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [noteToAdd,setNoteToAdd]=useState({title:"",content:""})

  useEffect(() => {
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNoteToAdd()
  };
  const handleTitle=(e)=>{
    console.log(e.target.value);
    setTitle(e.target.value)
    console.log(title)
  }
  const handleContent=(e)=>{
    console.log(e.target.value);
    setContent(e.target.value)
  }
  return (
    <div className="layout-column align-items-center justify-content-start" data-testid="note-manager">
      <div className="card w-200 pt-30 pb-8 mt-15 mb-15">
        <form onSubmit={handleSubmit} data-testid="note-form">
          <section className="layout-row align-items-center justify-content-center mt-20 mr-20 ml-20">
            <label className="form-title-label">Title:</label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              data-testid="form-input"
              className="form-input"
              onChange={(e) => handleTitle(e) }
            />
          </section>
          <section className="layout-row align-items-center justify-content-center mt-20 mr-20 ml-20">
            <label className="form-content-label">Content:</label>
            <textarea
              placeholder="Content"
              value={content}
              data-testid="form-textarea"
              className="form-textarea"
              onChange={(e) => handleContent(e)}
            />
          </section>
          <section className="layout-row align-items-center justify-content-center mt-20 mr-20 ml-20">
            <button  data-testid="form-submit-button" type="submit" disabled={title.length<=0 || content.length<=0}>{noteToEdit ? 'Update' : 'Add'}</button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default NoteForm;
