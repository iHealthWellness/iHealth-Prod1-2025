
//Component
import ProductsGrid from "../../ProductsGrid"
import SectionTitle from "../../SectionTitle"


//Import styles
import "./index.css"

const TopCollections = () => {
    return  <section className='store-top-collection'>
    <div className="store-top-collection-container">
        <SectionTitle text='Top Collections' center={true} />
        <ProductsGrid isTopCollection={true} />
    </div>
  </section>
}
export default TopCollections

