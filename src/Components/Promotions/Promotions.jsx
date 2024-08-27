import './Promotions.css'
import Offerings from '../Offerings/Offerings';

const Promotions = () => {
  return (
    <section className="data" data-aos="zoom-in">
      <div className="col-lg-6">
        <h3>NUESTRAS PROMOCIONES EXCLUSIVAS</h3>
        <ul className="promotions">
          <li>Núcleo familiar (hermanos) <img src="./images/10.png" alt="ícono de descuento 10%" className="discounts" /></li>
          <li>{'Promo "vení con amigos" '}<img src="./images/15.png" alt="ícono de descuento 15%" className="discounts" /></li>
          <li>{'Obteniendo la "Distinción" en el examen final'} <img src="./images/50.png" alt="ícono de descuento 50%" className="discounts" /></li>
        </ul>
        <p className="promotions centered">Aboná tu matrícula 2025 antes de diciembre <span className="bold">sin recargo!</span></p>
      </div>
      <Offerings/>
    </section>
  );
};

export default Promotions;
