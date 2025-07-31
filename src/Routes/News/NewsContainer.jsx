import { useEffect, useState } from 'react';
import New from '../../Components/News/New';

const NewsContainer = () => {
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
            {loading && <div className="card" aria-hidden="true">
                <img src="https://centuryhouseinc.com/wp-content/uploads/2016/05/paloma_09471_sparrow_blue.jpg" className="card-img-top" alt="loading image" />
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
        </>
    )
}

export default NewsContainer