
// Import component
import HotDeal from "src/Components/Store/Landing/HotDeal"
import Hero from "src/Components/Store/Landing/Hero"
import TopCollections from "src/Components/Store/Landing/TopCollections"


//fetch data using axios
import { customFetch } from "src/Components/Store/utils"

const url = "/products/category/men's clothing"

// get products data (men's clothing category)
export const loader = () => async () => {
    const response = await customFetch(url)
    const products = response.data
    return { products }
}


const Landing = ()=>{
    return <>
        <Hero />
        <TopCollections />
        <HotDeal />
    </>
}


export default Landing