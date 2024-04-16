import { Link } from "react-router-dom"
//Import images
import shirts from "../../../../Assets/Images/store-shirt-landing1.jpg"

//import styles
import './index.css'


const Hero = () =>{
    return <section className="store-landing-hero">
         <div className='store-landing-container'>
          <div className='store-landing-flex'>
            <div className='store-landing-text'>
              <h1>
                Shop and Give Back
              </h1>
  
              <div className='store-landing-products'>
                <Link to='products' className='store-landing-products-link'>
                  Our Products
                </Link>
              </div>
            </div>
            <div className="store-landing-shirts" >
              <img src={shirts} alt="shirts" />
            </div>
          </div>
        </div>
    </section>
}
export default Hero