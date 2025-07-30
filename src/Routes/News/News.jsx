import { Helmet } from 'react-helmet';
import 'aos/dist/aos.css';
import New from '../../Components/News/New';
import { useEffect, useState } from 'react';

const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/news')
            .then(res => res.json())
            .then(setNews)
            .catch(err => console.error('Failed to load news:', err))
            .finally(() => setLoading(false));
    }, []);

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
                {loading && <div className="card" aria-hidden="true">
                    <img src="https://centuryhouseinc.com/wp-content/uploads/2016/05/paloma_09471_sparrow_blue.jpg" className="card-img-top" alt="loading image"/>
                        <div className="card-body">
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span>
                            </p>
                            <a className="btn btn-primary button disabled placeholder col-6" aria-disabled="true"></a>
                        </div>
                </div>}
                {(news.length == 0 && !loading) ? <p>No hay noticias disponibles.</p> : news.map((item) => <New key={item.id} newsItem={item} />)}
            </div>
        </>
    )
}

export default News