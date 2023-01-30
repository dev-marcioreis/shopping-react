import './footer.css'
import { Link } from 'react-router-dom'
import { AiFillFacebook as Facebook, AiOutlineTwitter as Twitter, AiFillInstagram as Instagram, AiFillLinkedin as Linkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <>
     <footer>
        <div className="footer__container container">
            <article>
                <Link to='/' className='logo'>cart<span>React</span></Link>
                <p className='slogan'>As maiores e melhores marcas.</p>
                <div className="footer__social">
                    <a href="https://www.facebook.com/" target="_blank" rel='noreferrer noopener'><Facebook /></a>
                    <a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'><Twitter /></a>
                    <a href="https://www.instagram.com/" target="_blank" rel='noreferrer noopener'><Instagram /></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel='noreferrer noopener'><Linkedin /></a>
                </div>
            </article>
            <article>
                <h4>Institucional</h4>
                <Link to='/' className='link'>Sobre</Link>
                <Link to='/' className='link'>Produtos</Link>
                <Link to='/' className='link'>Fornecedores</Link>
                <Link to='/' className='link'>Contato</Link>
            </article>
            <article>
                <h4>Suporte</h4>
                <Link to='/' className='link'>Entrega</Link>
                <Link to='/' className='link'>Devolução</Link>
                <Link to='/' className='link'>Cancelamento</Link>
                <Link to='/' className='link'>Prazos</Link>
            </article>
            <article>
                <h4>Corporativo</h4>
                <Link to='/' className='link'>Imprensa</Link>
                <Link to='/' className='link'>FAQ's</Link>
                <Link to='/' className='link'>Franqueados</Link>
                <Link to='/' className='link'>Trabalhe Conosco</Link>
            </article>
        </div>
        <div className="footer__copy">
            <small>2023 CART React - &copy;Todos os direitos reservados.</small>
        </div>
    </footer>
    </>
  )
}

export default Footer