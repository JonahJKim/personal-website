import './About.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const About = () => {
    
    return (<>
        <Navbar />
        <section className='about'>

            <article className='about__intro'>
                Hi! I'm Jonah. I'm a sophomore at UCLA studying computer science. Some of my interests include competitive programming, tennis, listening to Minecraft parodies, and going to the gym. 
            </article>
            <article className='about__history'>
                I grew up in South Korea until the first grade, after which I lived in San Jose until the 3rd grade , then Washington until the 12th grade, then back down to California in Irvine. Throughout my childhood, I've wanted to be many things -- an astronaut, a Navy Seal, and a doctor -- but for some reason thought computer science was the coolest. 
            </article>
            <article className='about__learning'>
                One of my main passions is self-learning and setting goals. Every couple weeks, I enroll in an online course on either Udemy or Coursera about whatever topic I'm curious about and study every day until I finish it -- then I repeat. Generally, it involves topics relating to business, technology, and investing. I love learning new things and setting deadlines for myself to keep myself on track. If you go to the Education tab, you can see all of the courses I've taken so far!
            </article>
            <article className='about__data'>
                I've also dabbled in data science and machine learning. I'm fascinated by how deep supervised and reinforcement learning works and sometimes like to create models in my free time. Some projects I've made include a German translator, a music generator + neural style transfer, and a spaceship landing reinforcement learning model.
            </article>
            <article className='about__future'>
                In the future, I hope to join an impactful company where I can apply these skills and potentially work on a startup in my free time.
            </article>

        </section>
        <Footer />
    </>)
}

export default About;