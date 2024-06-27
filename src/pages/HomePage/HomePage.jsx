// вебінар
// const HomePage = () => {
// 	return <div>HomePage</div>
// }




import { useEffect, useState } from 'react';
import {MovieList} from '../../components/MovieList/MovieList';
import { getFilms } from '../../components/movies-api';
// import Loader from '../../components/Loader/Loader';
import css from './HomePage.module.css';

export default function HomePage() {
const [films, setFilms] = useState([]);
// const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFilms = async () => {
        try {
            const films = await getFilms();
            setFilms(films.results);
        } catch (error) {
            console.error('error', error);
        }
    //   } finally {
    //      setIsLoading(false);
    //   }
    };
    fetchFilms();
  }, []);

    return (
        <div>
        {/* {isLoading && <Loader />} */}
            <h2 className={css.title}>Trending today</h2>
            <MovieList films={films} />
        </div>
  );
}

//blended-03


// import { useEffect, useState } from 'react';
// import {MovieList} from '../../components/MovieList/MovieList';
// import { getFilms } from '../../components/movies-api';
// // import Loader from '../../components/Loader/Loader';
// import css from './HomePage.module.css';

// export default function HomePage() {
// const [movies, setMovies] = useState([]);
// // const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchMovies = async () => {
//         try {
//             const movies = await getFilms();
//             setMovies(movies.results);
//         } catch (error) {
//             console.error('error', error);
//         }
//     //   } finally {
//     //      setIsLoading(false);
//     //   }
//     };
//     fetchMovies();
//   }, []);

//     return (
//         <div>
//         {/* {isLoading && <Loader />} */}
//             <h2 className={css.title}>Trending today</h2>
//             <MovieList movies={movies} />
//         </div>
//   );
// }