import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import './Home.css';

const Home = () => {

    return (<>
        <Navbar />
        <div className='home'>
            <div className='home__text'>
                <p style={{ fontWeight: 'bold' }}>Hey, I’m Jonah! I’m an undergraduate student at UCLA studying Computer Science.</p>
                <p>I’m an incoming SWE intern @ <a href="https://www.realtor.com" className='home__text--company home__text--realtor'>Realtor.com</a>, a current SWE intern @ <a href="https://www.instagram.com/joinpoppin/?hl=en" className='home__text--company home__text--poppin'>Poppin</a>, a developer at <a href="https://community.ucla.edu/studentorg/5252" className='home__text--company home__text--noms'>Noms</a>, and a lead machine learning researcher for the UCLA <a href="https://ucladatares.com/research" className='home__text--company home__text--datares'>DataRes Research</a> team.</p>
                <p>I'm passionate about engineering scalable cloud systems, automating deployment of large applications (DevOps), designing useful ML models, and creating full-stack web/mobile apps.</p>
                <p>I have extensive experience in leading large software projects and spearheading multiple ML research initiatives and have an in-depth understanding of core tools in the software development process.</p>
            </div>
            <img className='home__image' src='https://images.squarespace-cdn.com/content/v1/635add5308cab54e82434b25/fd6e3fc6-e7d1-4196-956e-091fcda93bc6/Westwood+Drink+Picture.jpeg' alt="self-portrait" />
        </div>
        <Footer />
    </>)
}

export default Home;