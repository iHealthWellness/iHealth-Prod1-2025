
import Filters from "src/Components/Store/Products/Filters"
import ProductsContainer from "src/Components/Store/Products/ProductsContainer"


import { customFetch } from "src/Components/Store/utils"

//Import Styles
import './index.css'



const url = '/products'

export const loader = () => async ({ request }) => {
  // get params from url
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])

    const response = await customFetch(url, { params: params})

    const products = response.data
    const length = response.data.length

    return { products, length, params }
}




const Products = ()=>{
    return (
        <section className="store-products-layout">
          <div className="store-products-layout-container">
            <div className="store-products-layout-Filters">
              <Filters />
            </div>
            <div className="store-products-layout-ProductsContainer">
              <ProductsContainer />
            </div>
          </div>
        </section>
    )
}


export default Products