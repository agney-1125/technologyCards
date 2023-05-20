// Write your code here.
import './index.css'

const CardItem = props => {
  const {card} = props
  const {title, description, imgUrl, className} = card

  return (
    <li className={`card-container ${className}`}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="image-container">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
