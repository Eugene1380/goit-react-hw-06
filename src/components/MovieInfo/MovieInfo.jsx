import css from './MovieInfo.module.css';
import { Link } from 'react-router-dom';

const defaultImg = {
  poster:
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg',
  title: 'Title not found',
};

export const MovieInfo = ({ id, poster_path, title, overview, vote_average, genres }) => {
    return (
        <>
        <div className={css.wrapper}>
            <div className={css.poster}>
                <img className={css.img}
                    src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}`
                        : defaultImg.poster}
                    alt={title || defaultImg.title} />
            </div>

            <div className={css.box}>
                <h2 className={css.title}>
                    {/* {title || defaultImg.title} */}
                    <Link to={`/movies/${id}`} state={location} className={css.movieName}>
                        {title || defaultImg.title}
                    </Link>
                    </h2>
                <h3 className={css.accent}>User score:</h3>
                <p> {vote_average}</p>
                <h3 className={css.accent}>Overview:</h3>  
                <p className={css.overview}>{overview}</p>
                <h3>Genres</h3>
                <ul className={css.genresList}>
                    {genres?.map(({ id, name }) => (
                        <li key={id}>{name}</li>
                    ))}
                </ul>    
            </div>
        </div>
        </>
    )
};