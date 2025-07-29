import { Helmet } from 'react-helmet';
import 'aos/dist/aos.css';
import New from '../../Components/News/New';

const news = [
    {
        id: 1,
        title: "Londres 2026",
        date: "07-2025",
        images: ["/images/uk-2026.jpeg"],
        link: "https://drive.google.com/file/d/1ki-jZUxfgqZA3cfa-fRCJvXq9DLVyUSd/view?usp=drivesdk",
        btn: "Solicitar más información",
    },
    {
        id: 2,
        title: "Viaje 2026",
        date: "07-2025",
        images: ["/images/londres1.jpeg", "/images/londres2.jpeg"],
        link: "https://drive.google.com/file/d/1ki-jZUxfgqZA3cfa-fRCJvXq9DLVyUSd/view?usp=drivesdk",
        btn: "Solicitar más información",
    }
]

const News = () => {
    return (
        <>
            <Helmet>
                <title>Noticias - Kingdom Institute</title>
                <meta name="description" content="Mantente al día con las últimas noticias y actualizaciones de Kingdom Institute. Descubre eventos, anuncios y más." />
                <meta name="keywords" content="noticias, actualizaciones, eventos, anuncios, Kingdom Institute" />
                <meta property="og:title" content="Noticias - Kingdom Institute" />
                <meta property="og:description" content="Descubre las últimas noticias de Kingdom Institute." />
                <meta property="og:image" content="/images/news-image.jpg" />
            </Helmet>
            <div className="news">
                <h1 className='bold' data-aos="fade-down">Noticias</h1>
                {news.map((item) => <New key={item.id} newsItem={item}/>)}
            </div>
        </>
    )
}

export default News