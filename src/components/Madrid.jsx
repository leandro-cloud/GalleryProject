import madridImage from '../images/madrid.jpg'

const Madrid = () => {
  return (
    <img src={madridImage} alt='Imagen de Madrid' style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
  )
}

export default Madrid