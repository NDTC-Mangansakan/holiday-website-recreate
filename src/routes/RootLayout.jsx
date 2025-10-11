import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const RootLayout = () => {
  return (
    <>  
        <ScrollToTop/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default RootLayout