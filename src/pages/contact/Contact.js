import './Contact.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    const onNameChange = (event) => {
        setName(event.target.value);
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onMessageChange = (event) => {
        setMessage(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_ktwf5tg', 'template_y4wc7sg', form.current, 'y9DiAc97oEzM4hFx1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
        setName('');
        setEmail('');
        setMessage('');
    }
    
    return (<>
        <Navbar />
        <div className='contact'>
            <div className='contact__text'>
                <h2>Contact Information</h2>
                <p>jonahkim03@gmail.com</p>
                <p>(425) 209 - 5609</p>
                <p>330 De Neve Drive</p>
                <p>Los Angeles, CA 90024</p>
            </div>
            <div className='contact__form'>
                <form onSubmit={onSubmitHandler} ref={form}>
                    <label className='contact__form--label'>Name *</label>
                    <div className='contact__form--name'>
                        <input onChange={onNameChange} value={name} className='contact__form--input contact__form--input' type='text' name='name' required />                    
                    </div>
                
                    <label className='contact__form--label'>Email *</label>
                    <input onChange={onEmailChange} value={email} className='contact__form--input contact__form--input-email' type='email' name='email' required />

                    <label className='contact__form--label'>Message *</label>
                    <input onChange={onMessageChange} value={message} className='contact__form--input contact__form--input-message' type='text' name='message' required />

                    <button className='contact__form--button' type='submit'>Send</button>
                </form>
            </div>

            
        </div>
        <Footer />
    </>)
}

export default Contact;