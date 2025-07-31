import NewsContainer from "../../Routes/News/NewsContainer"
import 'aos/dist/aos.css';
import AddNew from "./AddNew"

const NewsSection = () => {
  return (
    <section className="news">
        <h2 className="bold centered fs-4">Novedades</h2>
        <AddNew />
        <NewsContainer />
    </section>
  )
}

export default NewsSection