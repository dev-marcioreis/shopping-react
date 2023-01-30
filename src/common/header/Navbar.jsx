import { AiOutlineMenu as Menu, AiOutlineClose as Close } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <>
     <div className="container">
            <div className="navbar">
              <ul className={mobileMenu ? 'nav__links-mobileMenu' : 'link flex-f'} onClick={() => setMobileMenu(false)}>
                <li>
                  <Link to='/'>informática</Link>
                </li>
                <li>
                  <Link to='/'>pc gamer</Link>
                </li>
                <li>
                  <Link to='/'>notebooks</Link>
                </li>
                <li>
                  <Link to='/'>smart tv's</Link>
                </li>
                <li>
                  <Link to='/'>games</Link>
                </li>
                <li>
                  <Link to='/'>eletrônicos</Link>
                </li>
                <li>
                  <Link to='/'>livros</Link>
                </li>
                <li>
                  <Link to='/'>relógios</Link>
                </li>
                <li>
                  <Link to='/'>iPhone</Link>
                </li>
              </ul>
              <button onClick={() => setMobileMenu(!mobileMenu)}>
                {
                  mobileMenu ? <i><Close className='close' /></i> : <i><Menu className='open' /></i> 
                }
              </button>
            </div>
          </div>
    </>
  )
}

export default Navbar