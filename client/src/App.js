import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';


import Sell from './pages/Sell';
import MentorList from './pages/MentorList';
import FeaturedItems from './pages/Products';
import MentorSignup from './pages/MentorSignup';
import EntrepreneurSignup from './pages/EntrepreneurSignup';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Events from './pages/Events';
import Learn from './pages/Learn';
import MentorDetails from './pages/MentorDetails';
import Courses from './pages/Courses';
import Featuredetails from './pages/ProductDetails';
import EventDetails from './pages/EventDetails';
import FIndTeam from './pages/FIndTeam';

function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/signup/mentor' element ={<MentorSignup />} />
      <Route path='/signup/entrepreneur' element ={<EntrepreneurSignup />} />
      <Route path='/signin' element ={<Signin />} />
      <Route path='/signup' element ={<Signup />} />
      <Route path='/events' element ={<Events />} />
      <Route path='/events/:id' element ={<EventDetails />} />
      <Route path='/teams' element ={<FIndTeam/>} />
      <Route path='/sell' element ={<Sell />} />
      <Route path='/products' element={<FeaturedItems />} />
      <Route path='/mentors' element={<MentorList />} /> 
      <Route path='/mentors/:id' element={<MentorDetails />} />
      <Route path='/learn' element={<Learn />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/featuredetails' element={<Featuredetails />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
