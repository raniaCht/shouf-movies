import MovieCard from "@/components/MovieCard";
import { getMovie } from "@/util/getMovies";
import { MovieTypeDetail } from "@/util/movieType";

type paramsType = {
  params: { id: number };
};

export default async function Movie({ params }: paramsType) {
  const movie: MovieTypeDetail = await getMovie(params.id);
  console.log("+++++", movie);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>movies fetched</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
        {movie.original_title}
      </div>
    </div>
  );
}
