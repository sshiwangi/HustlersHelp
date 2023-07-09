import Home from './pages/Homepage/Home'
import Sell from './pages/Sellpage/Sell'
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
