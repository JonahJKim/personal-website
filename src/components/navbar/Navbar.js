import './Navbar.css';
import { Link } from 'react-router-dom';
import { AiFillMail, AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';


const Navbar = () => {

    return (
        <nav className='navbar'>
            <Link  to='/'className='navbar__name'>
                Jonah Kim
            </Link>
            <div className='navbar__links'>
                <Link to="/about" className='navbar__link--about'>About</Link>
                <Link to='/education' className='navbar__link--education'>Education</Link>
                <Link to='/resume' className='navbar__link--resume'>Resume</Link>
                <Link to='/contact' className='navbar__link--contact'>Contact</Link>                
                <div className='navbar__socials'>
                    <AiFillMail className='navbar__socials--mail' size={20} onClick={() => window.location = 'mailto:jonahkim03@gmail.com'} />
                    
                    <a target="_blank" rel='noreferrer' href='https://www.instagram.com/jonahjkim' >
                        <AiOutlineInstagram size={20} />
                    </a>
                    
                    <a target="_blank" rel='noreferrer' href='https://www.github.com/jonahjkim'>
                        <AiOutlineGithub size={20}/>
                    </a>

                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/jonahjkim'>
                        <AiOutlineLinkedin size={20}/>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;