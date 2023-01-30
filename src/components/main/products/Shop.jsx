import './Shop.css'
import ProductsArq from '../../../ProductsArq'
import Product from './Product'


const Shop = () => {

  return (
      <section className="shop">
        <div className="shop__container">
            {
                ProductsArq.map((product, index) => <Product key={index} data={product} />)
            }
        </div>
      </section>
  )
}

export default Shop;