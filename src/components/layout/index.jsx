
import Footer from '../Footer';
import Header from '../header';
// import './index.css'
function Layout(props) {

 

    return (
        <>
<Header/>
{props.children}
<Footer/>

 
        </>

    );
}

export default Layout;
