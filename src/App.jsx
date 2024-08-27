import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Home from './Routes/Home/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'

function App() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div className="App">
      <Header/>
      <Home />
    </div>
  );
}

export default App;
