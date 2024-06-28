import { Grid } from '../Grid/Grid';
import { GridItem } from '../GridItem/GridItem';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const MovieList = ({ films }) => {
    // export default function MovieList({ films }) {
    const location = useLocation();
    return (
    <Grid>
        {films.map(({ id, title }) => {
        return (
            <GridItem key={id}>
                <Link to={/movies/${id}`} state= { location }>
                <h3>{title}</h3>
                </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};