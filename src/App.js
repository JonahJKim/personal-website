import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Education from './pages/education/Education';
import Resume from './pages/resume/Resume';
import Contact from './pages/contact/Contact';

import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div className='container'>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/about' element={ <About/> } />
                <Route path='/projects' element={ <Projects/> } />
                <Route path='/education' element={ <Education/> } />
                <Route path='/resume' element={ <Resume/> } />
                <Route path='/contact' element={ <Contact/> } />
            </Routes>
        </div>
    )
}

export default App;