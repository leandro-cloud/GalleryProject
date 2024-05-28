import amsterdamImage from '../images/amsterdam.jpeg'

const Amsterdam = () => {
  return (
    <img src={amsterdamImage} alt='Imagen de Amsterdam' style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
  )
}

export default Amsterdam