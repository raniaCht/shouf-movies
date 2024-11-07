"use client";
import { Genre, MovieType } from "@/util/movieType";
import moment from "moment";
import Image from "next/image";
import RatingMovie from "./RatingMovie";

type props = {
  movie: MovieType;
  genres: Genre[] | undefined;
};

const MovieCard = ({ movie, genres }: props) => {
  return (
    <div className="ml-8 flex-shrink-0 flex-grow-0 w-[50%] md:w-[20%] translate-0">
      <div className="flex flex-col w-full text-black">
        <Image
          src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
          width={100}
          height={100}
          alt=""
          className="w-full h-auto"
        />
        <span className="text-gray-600 text-sm mt-1">
          {moment(movie.release_date).format("MMM DD, YYYY")}
        </span>
        <h3 className="text-black text-lg mt-2">{movie.original_title}</h3>
        <RatingMovie
          voteCount={movie.vote_count}
          voteAverage={movie.vote_average}
        />
        <span>
          {movie.genre_ids.map((id, i) => {
            if (genres && genres.length > 0) {
              const item = genres.find((genre) => genre.id == id);
              return (
                <span className="text-gray-600 text-xs">
                  {item?.name}
                  {movie.genre_ids.length > 1 && movie.genre_ids.length > i + 1
                    ? ","
                    : "."}
                </span>
              );
            } else <></>;
          })}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
