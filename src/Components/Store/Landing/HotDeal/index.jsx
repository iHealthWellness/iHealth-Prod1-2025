import { Link } from "react-router-dom"
import shirts from "../../../../Assets/Images/store-shirt-landing2.jpg"

//Import Styles
import './index.css'


const HotDeal= () =>{
    return  <article className="store-landing-hotDeal">
    <section className="store-landing-hotDeal-container">

        <div className="store-landing-hotDeal-text">
            <div>
                <h2>HURRY UP!</h2>
                <p>HOT DEAL! 60% EXTRA OFF</p>
                <div className='store-landing-hotDeal-link-container'>
                    <Link to='products/2' className='store-landing-hotDeal-link'>
                        Order Now
                    </Link>
              </div>
            </div>
        </div>
        <img src={shirts} alt="shirts in display" className="store-landing-hotDeal-img" />

    </section>
</article>
}


export default HotDeal