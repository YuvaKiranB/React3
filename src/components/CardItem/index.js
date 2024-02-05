// Write your code here.
import './index.css'

const Card = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  const resName = `${className} card`

  return (
    <li className={resName}>
      <h1 className="h2">{title}</h1>
      <p className="p2">{description}</p>
      <img className="image" src={imgUrl} alt="logo" />
    </li>
  )
}

export default Card
