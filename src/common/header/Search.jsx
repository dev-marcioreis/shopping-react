import { Link } from 'react-router-dom'
import { BiSearchAlt2 as SearchBox } from 'react-icons/bi'
import { AiOutlineUser as User } from 'react-icons/ai'
import { BsBagCheck as Bag } from 'react-icons/bs'

const Search = () => {

  return (
    <>
        <div className="search">
          <div className="container flex-c">
            <div className="logo width">
              <Link to='/' className='search__logo'>mrss<span>shopping</span></Link>
            </div>
            <div className="search__box flex-f">
              <input type="text" placeholder='Buscar na loja...' />
              <Link to='/'><i><SearchBox /></i></Link>
              <span>Todas as categorias</span>
            </div>
            <div className="icon flex-f width">
              <Link to='/'><i><User /></i></Link>
              <div className="cart">
                <Link to='/cart'>
                  <i><Bag /></i>
                  <span>0</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Search