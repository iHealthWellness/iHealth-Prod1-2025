import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils'

//Import Styles
import "./index.css"

const ProductsGrid = ({isTopCollection=false,products=[]}) => {

    // get fetched data provided by loader in products page
    let data = products

 //TopCollection => show 3 items for (men's clothing category) data provided by loader in Landing page 
  if(isTopCollection){
    let { products } = useLoaderData()
    data=products.slice(0,3)
  }


  return (
    <div className='store-landing-topCollection-products'>
      <div className='store-landing-topCollection-container'>
      {data.map((product) => {
        const { id, title, price, image } = product
        const dollarsAmount = formatPrice(price)
        return (
          <Link
            key={id}
            to={`/store/products/${id}`}
            className='store-landing-topCollection-card'
          >
            <figure>
              <img
                src={image}
                alt={title}
                className='store-lading-topCollection-img'
              />
            </figure>
            <div>
              <h2>{title}</h2>
              <span>{dollarsAmount}</span>
            </div>
          </Link>
        )
      })}
      </div>
    </div>
  )
}
export default ProductsGrid