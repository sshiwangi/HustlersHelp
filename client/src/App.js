import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Homepage/Home';
import Sell from './pages/Sellpage/Sell';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/sell' element ={<Sell />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
