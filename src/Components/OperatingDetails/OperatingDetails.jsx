import './OperatingDetails.css'

const OperatingDetails = () => {
  return (
    <section className="details" data-aos="zoom-in-up">
      <ul className="mb-0">
        <li className='leftSide'><img src="./icons/clock.svg" alt="Horario" className="icon" />Lunes a viernes de 14:00 a 19:00hs</li>
        <li className="bordered"><img src="./icons/map-pin.svg" alt="Ubicación" className="icon" />Heredia 4232</li>
        <li className='rightSide'><img src="./icons/users.svg" alt="Modalidades" className="icon" />Modalidad presencial o virtual</li>
      </ul>
    </section>
  );
};

export default OperatingDetails;
