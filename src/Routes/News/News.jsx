import { Helmet } from 'react-helmet';
import NewsContainer from './NewsContainer';

const News = () => {
    return (
        <>
            <Helmet>
                <title>Novedades - Kingdom Institute</title>
                <meta name="description" content="Mantente al día con las últimas noticias y actualizaciones de Kingdom Institute. Descubre eventos, anuncios y más." />
                <meta name="keywords" content="noticias, actualizaciones, eventos, anuncios, Kingdom Institute" />
                <meta property="og:title" content="Noticias - Kingdom Institute" />
                <meta property="og:description" content="Descubre las últimas noticias de Kingdom Institute." />
                <meta property="og:image" content="/images/news-image.jpg" />
            </Helmet>
            <section className="news">
                <h1 className='bold' data-aos="fade-down">Novedades</h1>
                <NewsContainer />
            </section>

        </>
    )
}

export default News