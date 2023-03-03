export const NotesList = ({ notes, onDelete }) => {

  let noteItems = notes.map(item => (
    <div key={item.id} className="note-item">
      {item.content}
      <button 
        className="note-item__delete-btn"
        onClick={() => onDelete(item.id)}
      >
        ✖
      </button>
    </div>
  ));

  return (
    <div className="notes-list">
      {notes.length != 0 ? noteItems : 'Записей пока нет'}
    </div>
  )
}