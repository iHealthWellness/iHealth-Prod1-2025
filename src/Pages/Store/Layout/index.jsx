/** Store Layout */
import { Outlet, useNavigation } from 'react-router-dom'

//Import Styles
import "./index.css"

// Import component
import StoreNavbar from 'src/Components/Store/Layout/StoreNavbar';
import StoreLoading from 'src/Components/Store/StoreLoading';


const StoreLayout = () => {

  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'

  return <section className='store'>
    <StoreNavbar />
    {isPageLoading ? (
            <StoreLoading />
        ) : (  
        <Outlet />     
    )}
  </section>
      
};

export default StoreLayout;