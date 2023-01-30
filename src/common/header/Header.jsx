import './header.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'


const Header = () => {
  return (
      <header className='header'>
        <div className="container flex-c">
          <div className="header__logo">
            <Link to='/' className='logo'>cart<span>react</span></Link>
          </div>
        </div>
        <Navbar />
      </header>
  )
}

export default Header