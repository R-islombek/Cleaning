import './Card.css'

function Card(img,title,text) {
 

  return (
    <div className="card" >
        <img className="card__img" src={img} alt=""/>
         <h1 className="card__title">{title}</h1>
         <p className="card__text">{text}</p>
    </div>
  )
}

export default Card