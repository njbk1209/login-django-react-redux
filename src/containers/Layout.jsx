import Navbar from '../components/navigations/Navbar'
import Footer from '../components/navigations/Footer';

const Layout = (props) => {
    return(
        <>
            <Navbar/>
            {props.children}
            <Footer/>
        </>
    )
}


export default Layout