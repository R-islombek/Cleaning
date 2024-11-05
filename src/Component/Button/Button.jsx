import './Button.css'

function Button({title,bg,cl,border,shadow,wh}) {
  const styleComp = {
    backgroundColor: bg,
    color:cl,
    border:border,
    boxshadow:shadow,
    width:wh,
  }
  

  return (
    <div className="button" style={styleComp}>
        <p>{title}</p>
    </div>
  )
}

export default Button