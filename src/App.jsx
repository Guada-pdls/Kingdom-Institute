import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Home from './Routes/Home/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div className="App">
      <Header/>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
