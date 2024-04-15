import { useEffect, useRef, useState } from "react"

//Import Styles
import "./index.css"

//Import icons
import { BsCart3} from 'react-icons/bs'
import { FaBars } from "react-icons/fa6"
import { MdClose } from "react-icons/md";

import { NavLink } from 'react-router-dom'
import NavLinks from "../../NavLinks"


const StoreNavbar = () =>{

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef(null)
  const btnRefOpen = useRef(null)

  const LinksRef = useRef(null)

  const openMenu = () => {
    setIsMenuOpen(true)
  }
  const closeMenu = () =>{
    setIsMenuOpen(false)
  }

  // Attach click event listener to the document
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !navRef.current?.contains(event.target) &&
        !btnRefOpen.current.contains(event.target)
        || LinksRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.body.addEventListener('click', handleClickOutside)

    return () => {
      document.body.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])


    return <nav className='store-nav'>
    <div className='store-flex'>

      {/** Navbar Center  */}
      <div className='store-nav-center'>
        <ul className='store-center-link'>
          <NavLinks />
        </ul>
      </div>

      <div className='store-nav-end'>
        {/* Cart Link*/}
        <NavLink 
          to='cart'
          onClick={() => {document.querySelector("#UnderConst-wrapper").style.display = "flex"}}
        >
          <div className='store-cart-indicator'>
            <BsCart3 className='store-cart-icon' />
            <span className='store-cart-item-number'>
              {/* {numItemsInCart} */}
              <span className="store-cart-number">0</span>
            </span>
          </div>
        </NavLink>
        {/* Store dropdown */}
        <div className='store-nav-dropdown'>
          <label className='store-nav-bars'>
            <FaBars
              className='store-bars-icon' 
              ref={btnRefOpen}
              onClick={openMenu}
            />
          </label> 
          <ul
            className={`store-dropdown-items ${isMenuOpen && 'store-dropdown-items-show'}`}
            ref={navRef}
          >
            <div className='store-close-nav-icon'>
                <MdClose 
                  className="store-close-icon" 
                  onClick={closeMenu}
                />
            </div>
          
            <div 
              className="store-dropdown-link"
              ref={LinksRef}
            >
                <NavLinks />
            </div>
          </ul>
        
       
        </div>
      </div>
    </div>
  </nav>
}

export default StoreNavbar