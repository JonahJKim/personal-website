import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './Error.css'


const Error = () => {
    
    return (<>
        <Navbar />
        <div className='error'>
            <h1>404! Please choose a valid page :)</h1>
        </div>
        <Footer />
    </>)
}

export default Error;

