import { NavLink } from "react-router-dom"

//Import Styles
import "./index.css"


const links = [
    { id: 1, url: '/store', text: 'store' },
    { id: 3, url: 'products', text: 'products' },
    { id: 4, url: 'cart', text: 'cart' },
    { id: 5, url: 'checkout', text: 'checkout' },
    { id: 6, url: 'orders', text: 'orders' },
]

const NavLinks = ()=>{

    // checkout and orders pages provided only when there is a login user
   const user = false

    return <>
    {links.map((link) => {
        const { id, url, text } = link
        if ((url === 'checkout' || url === 'orders') && !user) return null
        return (
          <li 
            key={id} 
            className="store-nav-li-link"
            onClick={() => {
              if(url === 'cart'){
                document.querySelector("#UnderConst-wrapper").style.display = "flex";
              }
            }}
          >
            <NavLink 
              className={({ isActive }) =>
                isActive ? "store-active-link store-nav-link" : "store-nav-link"
              }
              to={url}
            >
              {text}
            </NavLink>
          </li>
        )
      })}
    </>
}

export default NavLinks