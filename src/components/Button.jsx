export function Button({ label = 'Просто кнопка', onClick, btnStyles }) {


  return <button onClick={onClick} style={btnStyles}>{label}</button>
}