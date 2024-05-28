import vienaImage from '../images/viena.jpg'

const Viena = () => {
  return (
    <img src={vienaImage} alt='Imagen de Viena' style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
  )
}

export default Viena