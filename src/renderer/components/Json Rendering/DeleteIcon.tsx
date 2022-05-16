
const iconStyle: React.CSSProperties = {
  color: "wheat"
}

export default function DeleteIcon( {onClick} : {onClick: () => void}) {

  return (
    <a href="#" onClick={onClick}><i className="fas fa-comment-dots" style={iconStyle}></i></a>
  )
}
