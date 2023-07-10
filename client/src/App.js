import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

import Sell from './pages/Sell';
import MentorList from './pages/MentorList';
import FeaturedItems from './pages/FeaturedItems';
import MentorSignup from './pages/MentorSignup';
import EntrepreneurSignup from './pages/EntrepreneurSignup';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Events from './pages/Events';
import About from './pages/About';
import Learn from './pages/Learn';
import MentorDetails from './pages/MentorDetails';
import Courses from './pages/Courses';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/signup/mentor' element ={<MentorSignup />} />
      <Route path='/signup/entrepreneur' element ={<EntrepreneurSignup />} />
      <Route path='/signin' element ={<Signin />} />
      <Route path='/signup' element ={<Signup />} />
      <Route path='/about' element ={<About />} />
      <Route path='/events' element ={<Events />} />
      <Route path='/sell' element ={<Sell />} />
      <Route path='/products' element={<FeaturedItems />} />
      <Route path='/mentors' element={<MentorList />} /> 
      <Route path='/mentors/:id' element={<MentorDetails />} />
      <Route path='/learn' element={<Learn />} />
      <Route path='/courses' element={<Courses />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
