import Background from '../assets/images/LibraryImage.jpg'
function Home() {
  return (
    <div style={{backgroundImage: `url(${Background})`}} 
        className='home-image'>
    </div>
  )
}

export default Home