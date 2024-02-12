import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { customFetch, formatPrice, generateAmountOptions } from "src/Components/Store/utils"


//Import Styles
import "./index.css"

export const loader = () => async ({ params }) => {
    const response = await customFetch.get(`/products/${params.id}`)

    return { product: response.data }
}

const SingleProduct = () =>{
    const { product } = useLoaderData()
    const { image, title, price, description, category } = product
    const dollarsAmount = formatPrice(price)
    const [amount, setAmount] = useState(1)

    const handleAmount = (e) => {
        setAmount(parseInt(e.target.value))
    }

    return <section className='store-singleProduct'>
      <div className="store-singleProducts-container">
        <div className='singleProducts'>
          <ul className='breadcrumb'>
            <li className='breadcrumb-item'>
              <Link to='/store/'><span>Store</span></Link>
            </li>
            <li className='breadcrumb-item'>
              <Link to='/store/products'><span>Products</span></Link>
            </li>
          </ul>

          <div className='store-singleProducts-info-container'>
            <img
              src={image}
              alt={title}
            />

            <div className='store-singleProducts-info'>
              <h1>{title}</h1>

              <p className='dollarsAmount'>{dollarsAmount}</p>

              <p className='description'>{description}</p>

              {/* amount */}
              <div className='store-singleProducts-amount'>
                  <h4>
                    amount
                  </h4>
                  <select
                    value={amount}
                    onChange={handleAmount}
                  >
                    {generateAmountOptions(5)}
                  </select>
              </div>

              {/* CART BUTTON */}
              <div className='store-singleProducts-cartBtn'>
                <button
                  onClick={() => {document.querySelector("#UnderConst-wrapper").style.display = "flex";}}
                >
                  Add to bag
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
}


export default SingleProduct