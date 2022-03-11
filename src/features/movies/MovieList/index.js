import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies } from "../../popularMoviesSlice";
import { MovieTile } from "./MovieTile";
import { Wrapper } from "./styled";

export const MovieList = () => {
const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchMovies());
},[dispatch])

const popularMovies = useSelector(selectMovies);
// const loading = useSelector(selectLoading);
// const error = useSelector(selectError);

  return (
    <Wrapper>
      {popularMovies.map((movie, index) => (
          <MovieTile
            key={index}
            poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            title={movie.title}
            date={movie.release_date.slice(0, 4)}
            voteAverage={movie.vote_average}
            voteCount={`${movie.vote_count} votes`}
          />
        ))
      }
    </Wrapper>
  )
}