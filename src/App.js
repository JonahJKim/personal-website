import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Education from './pages/education/Education';
import Resume from './pages/resume/Resume';
import Contact from './pages/contact/Contact';
import Error from './pages/404/Error'

import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div className='container'>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/about' element={ <About/> } />
                <Route path='/education' element={ <Education/> } />
                <Route path='/resume' element={ <Resume/> } />
                <Route path='/contact' element={ <Contact/> } />
                <Route path='*' element={ <Error /> } />
            </Routes>
        </div>
    )
}

export default App;