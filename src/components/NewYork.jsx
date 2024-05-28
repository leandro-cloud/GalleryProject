import newYorkImage from '../images/newyork.jpg'

const NewYork = () => {
  return (
    <img src={newYorkImage} alt='Imagen de New York' style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
  )
}

export default NewYork