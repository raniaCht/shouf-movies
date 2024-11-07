import { getGenres, getMoviesByType } from "@/util/getMovies";
import { Genre, MovieType } from "@/util/movieType";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Carousel from "./Carousel";
import { EmblaOptionsType } from "embla-carousel";

const MovieSection = async ({
  title,
  type,
}: {
  title: string;
  type: string;
}) => {
  const resMovie = await getMoviesByType(type);
  const resGenre = await getGenres();

  const movies: MovieType[] = resMovie.results;
  const genres: Genre[] = resGenre.genres;

  return (
    <div className="my-5">
      <div className="flex justify-between items-center">
        <h2 className="text-black text-4xl">{title}</h2>
        <Link href="" className="flex items-center gap-2">
          <span className="text-rose-700 text-lg">See more</span>
          <ChevronRight size={12} className="text-red-700" />
        </Link>
      </div>
      <div className="">
        <Carousel slides={movies} genres={genres} type="movie" />
      </div>
    </div>
  );
};

export default MovieSection;
