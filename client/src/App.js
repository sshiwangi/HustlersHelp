import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Homepage/Home';
import Footer from './components/Footer';

import Sell from './pages/Sellpage/Sell';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
  
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/sell' element ={<Sell />} />
    </Routes>
    
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
