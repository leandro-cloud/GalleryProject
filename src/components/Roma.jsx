import romaImage from '../images/roma.jpg'

const Roma = () => {
  return (
    <img src={romaImage} alt='Imagen de Roma' style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
  )
}

export default Roma