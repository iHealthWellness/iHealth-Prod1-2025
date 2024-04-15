import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils'

//Import Styles
import "./index.css"

const ProductList = ({products}) => {
   
  return (
    <section className='store-productsList'>
        <div className='store-productsList-container'>
            {products.map((product) => {
                const { id,title, price, image } = product
                const dollarsAmount = formatPrice(price)

                return (
                <div className='store-productsList-cart'>
                    <img
                    src={image}
                    alt={title}
                    />
                    <div className='store-productsList-info'>
                        <h3>{title}</h3>
                    

                        <div className='store-productsList-details-container'>
                            <p>
                                {dollarsAmount}
                            </p>
                            <Link
                                key={id}
                                to={`/store/products/${id}`}
                                className='store-productsList-details-link'
                            >
                                Details
                            </Link>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    </section>
  )
}

export default ProductList