import Carousel from '../../Components/Carousel/Carousel';
import Promotions from '../../Components/Promotions/Promotions';
import Offerings from '../../Components/Offerings/Offerings';
import OperatingDetails from '../../Components/OperatingDetails/OperatingDetails';

const Home = () => {
  return (
      <>
        <Carousel />
        <Promotions />
        <Offerings />
        <OperatingDetails />
      </>
  );
};

export default Home;
