import './index.css'

const EmojiItem = props => {
  const {details, feedbackBtn} = props
  const {name, imageUrl} = details

  const onClick = () => {
    feedbackBtn()
  }

  return (
    <li className="listElement">
      <img className="emoji" onClick={onClick} src={imageUrl} alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default EmojiItem
