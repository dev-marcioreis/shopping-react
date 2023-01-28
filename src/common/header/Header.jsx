import './header.css'
import { BrowserRouter } from 'react-router-dom'
import Head from './Head'
import Navbar from './Navbar'
import Search from './Search'

const Header = () => {
  return (
    <BrowserRouter>
      <Head />
      <Search />
      <Navbar />
    </BrowserRouter>
  )
}

export default Header