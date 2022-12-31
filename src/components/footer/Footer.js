import './Footer.css';
import { AiFillMail, AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {

    return (
        <footer className='footer'>
            <div className='footer__name'>
                <p>Jonah Kim</p>
                <p>© All rights are reserved | 2022</p>
            </div>
            <div className='footer__socials'>
                <AiFillMail className='footer__socials--mail' size={20} onClick={() => window.location = 'mailto:jonahkim03@gmail.com'} />
                
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
        </footer>
    )
}

export default Footer;