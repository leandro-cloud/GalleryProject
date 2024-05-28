import berlinImage from '../images/berlin.jpg'

const Berlin = () => {
  return (
    <img src={berlinImage} alt='Imagen de Berlin' style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
  )
}

export default Berlin