import Home from './pages/Homepage/Home'
import Sell from './pages/Sellpage/Sell'
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Footer />
    </Router>
  );
}

export default App;
