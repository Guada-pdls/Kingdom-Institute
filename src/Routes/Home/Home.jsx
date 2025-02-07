import Carousel from '../../Components/Carousel/Carousel';
import WhyStudyEnglish from '../../Components/WhyStudyEnglish/WhyStudyEnglish';
import OperatingDetails from '../../Components/OperatingDetails/OperatingDetails';
import Offerings from '../../Components/Offerings/Offerings';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Inicio - Kingdom Institute</title>
        <meta name="description" content="Bienvenido a Kingdom Institute. Cursos de inglés para niños, jóvenes y adultos. Capacitaciones para negocios, preparación de exámenes internacionales y clases personalizadas." />
        <meta name="keywords" content="cursos de ingles, inglés, inglés para niños, clases de inglés, inglés personalizado, examenes de inglés, preparacion de examenes" />
        <meta property="og:title" content="Inicio - Kingdom Institute" />
        <meta property="og:description" content="Descubre los mejores cursos en Kingdom Institute." />
        <meta property="og:image" content="/images/home-image.jpg" />
      </Helmet>
      <Carousel />
      <WhyStudyEnglish />
      <Offerings />
      <OperatingDetails />
    </>
  );
};

export default Home;
