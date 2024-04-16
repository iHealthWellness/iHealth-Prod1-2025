import { Form, useLoaderData, Link } from 'react-router-dom'
import FormInput from '../../FormInput'
import FormSelect from '../../FormSelect'
import FormRange from '../../FormRange'

//Import Styles
import "./index.css"

const Filters = () => {
    const { params } = useLoaderData()

    const { search, category, sort, price } = params
    return (
        <Form 
            className='store-products-filter'
        >
            {/* SEARCH */}
            <FormInput
                type='search'
                name='search'
                defaultValue={search}
            />
            {/* CATEGORIES */}
            <FormSelect
                label='Category'
                name='category'
                list={["electronics","men's clothing","women's clothing"]}
                defaultValue="clothing"
            />
            {/* SORT */}
            <FormSelect
                label='sort by'
                name='sort'
                list={['desc', 'asc']}
                defaultValue={sort}
            />
            {/* PRICE */}
            <FormRange
                label='price'
                name='price'
                price={price}
            />
            
            {/* BUTTONS */}
            <button
                type='submit'
                className='store-products-filter-btn'
            >
                search
            </button>
            <Link to='/store/products' className='store-products-filter-link'>
                reset
            </Link>
        </Form>
    )
}

export default Filters