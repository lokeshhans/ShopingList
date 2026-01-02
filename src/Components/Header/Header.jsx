import './Header.css'
import HeaderImg from '../../assets/Logo_img.png'
function Header() {
  return (
    <div className='Header-container'>
        <h1 className='header'>Shoping Clothes List</h1>
        <div className="img_container">
         <img className='HeaderImg' src={HeaderImg} alt="" />
        </div>
    </ div>
  )
}

export default Header