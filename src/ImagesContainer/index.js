import './index.css'

const ImagesComponent = props => {
  const {eachImage, playGame} = props

  const {id} = eachImage

  const increaseScore = () => {
    playGame(id)
  }

  return (
    <li className="li-item">
      <button className="btn-style" type="button" onClick={increaseScore}>
        <img
          className="fruits-image"
          src={eachImage.thumbnailUrl}
          alt="thumbnail-img"
        />
      </button>
    </li>
  )
}

export default ImagesComponent
