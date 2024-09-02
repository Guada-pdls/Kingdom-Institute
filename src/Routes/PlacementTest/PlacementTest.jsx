import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlacementTest.css'

const PlacementTest = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const savedPart = localStorage.getItem('currentPart');
    if (savedPart) {
      navigate(`test/${savedPart}`);
    }
  }, [navigate]);

  const startTest = () => {
    localStorage.removeItem('currentPart'); 
    localStorage.removeItem('scores'); 
    navigate('test/1');
  };

  return (
    <section className='test-intro container'>
      <h3>Bienvenido al Placement Test de Inglés</h3>
      <p>Este test evaluará tus conocimientos en inglés para determinar tu nivel. ¿Estás listo?</p>
      <button className='button' onClick={startTest}>Iniciar Test</button>
    </section>
  );
};

export default PlacementTest;
