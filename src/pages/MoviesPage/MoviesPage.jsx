import { SearchForm } from "../../components/SearchForm/SearchForm"
import { useSearchParams } from "react-router-dom";
import { getSearchFilm } from "../../components/movies-api";
import { useEffect, useState } from 'react';
import { MovieList } from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
    const [params, setParams] = useSearchParams();
    const query = params.get("query");
    const [movies, setMovies] = useState([]);

const handleSearch = (event) => {
    event.preventDefault();
    setSearchParams({ query: inputValue });
  };

    useEffect(() => {
        if (!query) { return }
        const getData = async () => {
            try {
                const films = await getSearchFilm(query);
                //console.log("films >> ", films);
                setMovies(films.results);
            } catch(error) {
                console.log(error);
            }
        }
        getData();
    }, [query]) 
    return <div><SearchForm onSubmit={handleSubmit} />
        <MovieList films={movies} />
    </div>
}

export default MoviesPage