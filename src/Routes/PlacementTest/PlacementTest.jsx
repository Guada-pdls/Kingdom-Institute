import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlacementTest.css'
import { Helmet } from 'react-helmet';

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
    <>
      <Helmet>
        <title>Test de Colocación - Kingdom Institute</title>
        <meta name="description" content="Realiza nuestro test de colocación para conocer tu nivel de inglés en Kingdom Institute." />
        <meta name="keywords" content="test de colocación, inglés, niveles de idioma, Kingdom Institute" />
        <meta property="og:title" content="Test de Colocación - Kingdom Institute" />
        <meta property="og:description" content="Descubre tu nivel de inglés con nuestro test de colocación." />
        <meta property="og:image" content="/images/placement-test-image.jpg" />
      </Helmet>
      <section className='test-intro-container'>
        <div className='test-intro'>
          <h3>Bienvenido al Placement Test de Inglés</h3>
          <p>Este test evaluará tus conocimientos en inglés para determinar tu nivel. ¿Estás listo?</p>
          <button className='button' onClick={startTest}>Iniciar Test</button>
        </div>
      </section>
    </>
  );
};

export default PlacementTest;
