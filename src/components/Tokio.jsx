import tokioImage from '../images/tokio.jpg'

const Tokio = () => {
  return (
    <img src={tokioImage} alt='Imagen de Tokio' style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
    )
}

export default Tokio