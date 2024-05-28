import londonImage from '../images/london.jpg'

const London = () => {
  return (
    <img src={londonImage} alt='Imagen de Londres' style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
  )
}

export default London