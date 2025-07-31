const NewsCarousel = ({ newId, newImages, newImagesDescriptions }) => {
    return (
        <div id={newId} className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-indicators">
                {newImages.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target={"#" + newId}
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-label={"Slide " + (index + 1)}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {newImages.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                    >
                        <img src={image} className="d-block w-100" alt={`Slide ${index + 1}, ${newImagesDescriptions[index]}`} />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={"#" + newId} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={"#" + newId} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default NewsCarousel