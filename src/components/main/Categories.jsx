import Img1 from './images/cat-1.png'
import Img2 from './images/cat-2.png'
import Img3 from './images/cat-3.png'
import Img4 from './images/cat-4.png'

const Categories = () => {

  const category = [
    {
      categoryImg: Img1,
      categoryInfo: 'Entrega Grátis',
      categoryAlt: 'Category image'
    },
    {
      categoryImg: Img2,
      categoryInfo: 'Segurança',
      categoryAlt: 'Category image'
    },
    {
      categoryImg: Img3,
      categoryInfo: 'Ofertas',
      categoryAlt: 'Category image'
    },
    {
      categoryImg: Img4,
      categoryInfo: 'Facilidade',
      categoryAlt: 'Category image'
    }
  ]

  return (
    <>
      <div className="category flex-f">
        {
          category.map((value, index) => {
            return (
              <div className="box" key={index}>
                <div className="box__image">
                  <img src={value.categoryImg} alt={value.categoryAlt} />
                </div>
                <h3>{value.categoryInfo}</h3>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Categories