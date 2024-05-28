import miamiImage from '../images/miami.jpg'

const Miami = () => {
  return (
    <img src={miamiImage} alt='Imagen de Miami' style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
  )
}

export default Miami