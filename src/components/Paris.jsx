import parisImage from '../images/paris.jpg'

const Paris = () => {
  return (
    <div>
      <img src={parisImage} alt='Foto ciudad de Paris' style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
    </div>
  )
}

export default Paris
