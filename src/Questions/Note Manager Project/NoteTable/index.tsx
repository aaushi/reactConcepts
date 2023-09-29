import React from 'react';
import { Note } from '../Note';
import NoteItem from '../NoteItem';

interface NoteTableProps {
  notes: Note[];
  onDelete: (id: number) => void;
  onEdit: (note: Note) => void;
}

const NoteTable: React.FC<NoteTableProps> = ({ notes, onDelete, onEdit }) => {
  const note: Note = {
    id: 1,
    title: "Some Title",
    content: "Some Content",
  }
  return (
    <div className="card w-30 pt-30 pb-8 mt-2">
      <table>
        <thead>
          <tr>
            <th colSpan={4}>Notes</th>
          </tr>
        </thead>
        <tbody data-testid="notes-list">
          <NoteItem
            note={note}
            onDelete={() => { }}
            onEdit={() => { }}
          />
        </tbody>
      </table>
    </div>
  );
};

export default NoteTable;
