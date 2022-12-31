import './Resume.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import resume from '../../public/Resume Picture.png'

const Resume = () => {
    
    return (<>
        <Navbar />
        <div className='resume'>
            <h3>Click on image to view resume</h3>
            <a href='https://drive.google.com/file/d/1_Ppw9QTmtm56AMwtp5pHU_qm5G8GhpHK/view?usp=sharing'>
                <img className='resume__picture' src={resume} alt='Resume'/>
            </a>

        </div>
        <Footer />
    </>)
}

export default Resume;