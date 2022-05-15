import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import route pages
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <>
      <Router>
        <Link to="/">Home pages</Link><br/>
        <Link to="/about">About pages</Link><br />
        <Link to="/contact">contact pages</Link><br/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
      </Router>
      
    </>
  );
}

export default App;
