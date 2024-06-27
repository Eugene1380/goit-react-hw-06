import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCast } from '../movies-api';
import css from './MovieCast.module.css';

export default function MovieCast() {
    const { movieId } = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        if (!movieId) return;

        async function getCast() {
            try {
                const data = await getFilmCast(movieId);
                setCasts(data.cast);
            } catch (error) {
                console.log("error-MovieCast >> ", error);
            }
        }
    getCast();
    }, [movieId]);

    return (
        <div>
            <h3>Cast</h3>
            <ul className={css.castList}>
                {casts.map(cast => (
                <li key={cast.id} className={css.castItem}>
                    <div>
                        <img
                            src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
                            alt={cast.name}
                        />
                    </div>
                    <p className={css.name}>{cast.name}</p>
                    <p>Character: {cast.character}</p>
                </li>
                ))}
            </ul>
        </div>
    );
}