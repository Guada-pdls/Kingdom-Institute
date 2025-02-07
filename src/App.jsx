import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Routes/Home/Home.jsx';
import Contact from './Routes/Contact/Contact.jsx';
import Courses from './Routes/Courses/Courses.jsx';
import Exams from './Routes/Exams/Exams.jsx';
import Gallery from './Routes/Gallery/Gallery.jsx';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer.jsx';
import PlacementTest from './Routes/PlacementTest/PlacementTest.jsx';
import TestPart from './Routes/TestPart/TestPart.jsx';

function App() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/cursos' element={<Courses />} />
          <Route path='/examenes' element={<Exams />} />
          <Route path='/galeria' element={<Gallery />} />
          <Route path='/placement-test' element={<PlacementTest />} />
          <Route path='/placement-test/test/:page' element={<TestPart />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
