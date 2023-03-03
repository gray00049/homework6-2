export const Title = ({ title, onUpdate }) => {
  return (
    <div className="notes-title">
      <p>{title}</p>
      <button onClick={onUpdate}>↻</button>
    </div>
  )
}