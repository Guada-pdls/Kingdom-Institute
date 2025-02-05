import './Carousel.css'

const Carousel = () => {
  return (
    <section className="carouselContainer">
      <div id="carouselDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/banner.jpg" className="d-block w-100 slide" alt="Banner instituto" />
          </div>
          <div className="carousel-item">
            <img src="./images/levels.webp" className="d-block w-100 slide" alt="Niveles" />
          </div>
          <div className="carousel-item">
            <img src="./images/levels.webp" className="d-block w-100 slide" alt="Niveles" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
