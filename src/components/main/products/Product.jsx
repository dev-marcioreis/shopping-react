import './Product.css'
import { RiShoppingBag3Line as ShopBag } from 'react-icons/ri'

const Product = (props) => {

  const {name, brand, description, productImg, price} = props.data;

  return (
    <div className="product__box">
      <div className='product__image'>
        <img src={productImg} alt="" />
      </div>
      <div className="product__content">
        <h2>{brand}</h2>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="product__price">{price}</div>
      </div>
      <button className="product__btn"><ShopBag />Comprar </button>
    </div>
  )
}

export default Product