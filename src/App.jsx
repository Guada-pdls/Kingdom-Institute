import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Routes/Home/Home.jsx';
import Contact from './Routes/Contact/Contact.jsx';
import Courses from './Routes/Courses/Courses.jsx';
import CustomizedClasses from './Routes/CustomizedClasses/CustomizedClasses.jsx';
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
          <Route path='/contact' element={<Contact />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/customized-classes' element={<CustomizedClasses />} />
          <Route path='/exams' element={<Exams />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/placement-test' element={<PlacementTest />} />
          <Route path='/placement-test/test/:page' element={<TestPart />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
