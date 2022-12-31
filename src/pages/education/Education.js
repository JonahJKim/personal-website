import './Education.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Education = () => {
    
    return (<>
        <Navbar />
        <div className='education'>
            
            <div className='education__school'>
                <p className='education__logo'>Relevant School Courses</p>
                <a target="_blank" rel='noreferrer' className='education__link' href='http://web.cs.ucla.edu/classes/spring1c/cs32/syllabus.html'>Data Structures & Algorithms</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='http://web.cs.ucla.edu/classes/winter1a/cs33/'>Computer Organization</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='http://web.cs.ucla.edu/classes/winter22/cs35L/'>Software Construction</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='http://web.cs.ucla.edu/classes/spring18/cs111/'>Operating System Principles</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='http://web.cs.ucla.edu/~ani/classes/csm51a.09f/'>Logic Design of Digital Systems</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.math.ucla.edu/~bonsoon/math33b.spring2019/'>Multivariable Calculus</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.math.ucla.edu/~tao/resource/general/33a.2.05w/index.html'>Linear Algebra</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://jenseberhardt.com/teaching/W18-61.html'>Discrete Mathematics</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://physics-1-series.physics.ucla.edu/table-1b.html'>Physics I & II</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://sa.ucla.edu/ro/Public/SOC/Results/ClassDetail?term_cd=16W&subj_area_cd=COM%20SCI&crs_catlg_no=0118%20%20%20%20&class_id=187350200&class_no=%20001%20%20'>Computer Network Fundamentals</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://sa.ucla.edu/ro/Public/SOC/Results/ClassDetail?term_cd=15S&subj_area_cd=COM%20SCI&crs_catlg_no=0180%20%20%20%20&class_id=187780200&class_no=%20001%20%20'>Algorithms and Complexity</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='http://web.cs.ucla.edu/classes/winter22/cs131/'>Programming Languages</a>
            </div>
            <div className='education__online'>
                <p className='education__logo'>Online Courses / Books:</p>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.udemy.com/course/learn-ansible/'>Ansible - Mumshad M.</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.udemy.com/course/terraform-for-the-absolute-beginners/'>Terraform - Mumshad M.</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.udemy.com/course/github-actions/'>GitHub Actions - Ali Alaa</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.udemy.com/course/learn-kubernetes/'>Kubernetes - Mumshad M.</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.udemy.com/course/learn-docker/'>Docker - Mumshad M.</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.udemy.com/course/nginx-fundamentals/'>Nginx - Ray Viljoen</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.udemy.com/course/the-complete-nodejs-developer-course-2/'>Node.js - Andrew Mead </a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/'>MERN - Max Schwarz.</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.udemy.com/course/react-redux/'>React - Stephen Grider</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/'>CSS - Max Schwarz.</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.udemy.com/course/jenkins-beginner-tutorial-step-by-step/'>Jenkins - Raghav Pal</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.udemy.com/course/flask-mega-tutorial/'>Flask - Miguel Grinberg</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/'>Web Developer - Andrei Neagoie</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/'>Amazon Web Services SAA - Stephane Maarek </a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://learn.acloud.guru/course/aws--certified-cloud-practitioner/dashboard'>Amazon Web Services CCP - A Cloud Guru</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.coursera.org/specializations/machine-learning-introduction'>Machine Learning Specialization - Andrew Ng</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.coursera.org/specializations/deep-learning'>Deep Learning Specialization - Andrew Ng</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://course.fast.ai/'>FastAI - Jeremy Howard</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.coursera.org/learn/fundamentals-of-reinforcement-learning'>Reinforcement Learning - Martha White</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='http://incompleteideas.net/book/the-book-2nd.html'>Reinforcement Learning (book) - Sutton & Barto</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.davidsilver.uk/teaching/'>Reinforcement Learning, Advanced Topics - David Silver</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.udemy.com/course/investing-in-stocks/'>Stock Trading - Steve Ballinger</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.udemy.com/course/blockchain-and-bitcoin-fundamentals/'>Crypto & Blockchain - George Levy</a>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.udemy.com/course/startup-fast-track-confident-launch-in-90-days-or-less/'>Startups - Donitas Jonikas</a>
            </div>
            <div className='education__certifications'>
                <p className='education__logo'>Certifications</p>
                <a target="_blank" rel='noreferrer' className='education__link' href='https://www.credly.com/badges/5947af55-7e60-4315-824f-b902c90037e3/public_url'>Certified Cloud Practitioner, Amazon Web Services - August 2022</a>

            </div>
        </div>
        <Footer />
    </>)
}

export default Education;