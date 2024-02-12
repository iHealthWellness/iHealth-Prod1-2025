import { useRouteError } from "react-router-dom"

//Import Styles
import './index.css'

const ErrorElement = () =>{

    const error = useRouteError()
    // get the exact Error wile in dev mode
    //console.log(error)
    return <div className="errorElement">
        <h4>there was an error... </h4> 
    </div>

}

export default ErrorElement