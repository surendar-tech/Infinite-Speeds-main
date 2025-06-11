import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home'
import About from './Component/About';
import Services from './Component/Services';
import Plans from './Component/Plans';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Copyright from './Component/Copyright';
import Article from './Component/Article';
import Terms from './Component/Terms';
import Privacy from './Component/Privacy';


function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Plans" element={<Plans />} />
        <Route path="/article" element={<Article />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      <Copyright />
    </div>
  );
}

export default App;