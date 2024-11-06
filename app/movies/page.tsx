import MovieCard from "@/components/MovieCard";
import getMovies from "@/util/getMovies";
import { MoviesType } from "@/util/movieType";

export default async function Movies() {
  const movies: MoviesType = await getMovies();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>movies fetched</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
        {movies.results.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}
