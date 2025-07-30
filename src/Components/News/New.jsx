import "./News.css"
import NewsCarousel from "./NewsCarousel";

const New = ({ newsItem }) => {
  const isEven = (num) => num % 2 === 0;
  return (
    <article className="card mb-4" data-aos={isEven(newsItem.id) ? 'fade-right' : 'fade-left'}>
      <NewsCarousel newId={`carousel-${newsItem.id}`} newImages={newsItem.images} />
      <div className="card-body">
        <h2 className="card-title fs-4">{newsItem.title}</h2>
        <p className="card-text">{newsItem.date}</p>
        <a href={newsItem.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary button">{newsItem.btn}</a>
      </div>
    </article>
  )
}

export default New