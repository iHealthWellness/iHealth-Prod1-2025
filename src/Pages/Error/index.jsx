/** Global Error page */

import { useRouteError,Link } from "react-router-dom"

//Import Styles
import "./index.css"

//Import images
import notFoundIcon from '../../Assets/Icons/404-icon.png'

const Error = ()=>{
    const error = useRouteError()

    //Page not found
    if(error.status === 404){
        return <main>
          <div className="not-found">
            <span>4 
              <img className='notFound-hearth' src={notFoundIcon} alt="medical stethoscope" />
            4</span>
            <p className="notFound-text">Page note found</p>
            <Link to='/' className='back-home'>
              Go back home
            </Link>
          </div>
        </main>
    }

    // other Errors
    return (
        <main>
          <p className="other-error">there was an error...</p>
        </main>
    )

}
export default Error