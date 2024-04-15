import { useLoaderData } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'
// import Pagination from '@mui/material/Pagination';
import { Pagination, Stack } from '@mui/material';

const getFromLocalStorage = () =>{
  return localStorage.getItem('layout') || 'grid'
}

const setToLocalStorage = (layout) => {
  localStorage.setItem('layout',layout)
}
// Import component
import ProductsGrid from '../../ProductsGrid'
import ProductList from '../../ProductList'



//Import Styles
import './index.css'

const ProductsContainer = () =>{
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8

  const { products,length } = useLoaderData()

  const totalProducts = length

  const [layout, setLayout] = useState(getFromLocalStorage())

  useEffect(()=>{
    setToLocalStorage(layout)
  },[layout])

  const setActiveStyles = (pattern) => {
    return `${pattern === layout ? 
        'store-ProductsContainer-activeBtn'
        : ''
    }`
  }
  
  // Pagination
  const indexOfLastProducts = currentPage * productsPerPage;
  const indexOfFirstProducts = indexOfLastProducts - productsPerPage;

  // Scroll To Top
  const paginate = (e, value)=>{
    setCurrentPage(value)
    window.scroll({top:100,behavior:'smooth'})
  }
  
  return <section className='store-ProductsContainer-container'>
          {/* HEADER */}
          <div className='store-ProductsContainer-header'>
              <h4>
                {totalProducts} product{(totalProducts > 1) && 's'}
              </h4>
              <div>
              <button
                  onClick={() => setLayout('grid')}
                  className={setActiveStyles('grid')}
              >
                  <BsFillGridFill />
              </button>

              <button
                  onClick={() => setLayout('list')}
                  className={setActiveStyles('list')}
              >
                  <BsList />
              </button>
              </div>
          </div>

          {/* PRODUCTS */}
          <div className='store-ProductsContainer-products'>
              {totalProducts === 0 ? (
              <section className='store-ProductsContainer-noProducts'>
                <h5>
                  Sorry, no products matched your search...
                </h5>
              </section>
              ) : layout === 'grid' ? (
                  <ProductsGrid
                    products={products.slice(indexOfFirstProducts, indexOfLastProducts)}
                  />
              ) : (
                  <ProductList
                    products={products.slice(indexOfFirstProducts, indexOfLastProducts)}
                  />
              )}
          </div>

          {/* PAGINATION */}
          <div className='store-ProductsContainer-pagination'>
            <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
              {length > 8 && (
                <Pagination
                  color="standard"
                  shape="rounded"
                  defaultPage={2}
                  count={Math.ceil(length / productsPerPage)}
                  page={currentPage}
                  onChange={paginate}
                  size="large"
                />
              )}
            </Stack>
          </div>
  </section>
}
export default ProductsContainer