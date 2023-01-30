import './home.css'
import Categories from './Categories'
import Slider from './Slider'
import Shop from './products/Shop'

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container">
          <Categories />
          <Slider />
          <Shop />
        </div>
      </section>
    </>
  )
}

export default Home