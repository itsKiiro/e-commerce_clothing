import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import TopBanner from './components/TopBanner';

function App() {
  return (
    <Router>
      <TopBanner />
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
