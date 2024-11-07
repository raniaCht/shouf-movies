import { Star, UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";

function RatingMovie({
  voteAverage,
  voteCount,
}: {
  voteAverage: number;
  voteCount: number;
}) {
  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center gap-1">
        {/* <Image src={"/icons/imdb.png"} width={35} height={17} alt="imdb" /> */}
        <p className="text-sm">{voteCount}</p>
        <UserRound size={14} className="fill-rose-700 text-rose-700" />
      </div>
      <div className="flex items-center gap-1">
        {/* <Image src={"/icons/tomato.png"} width={16} height={17} alt="imdb" /> */}
        <p className="text-sm text-inherit">{voteAverage.toFixed(1)} / 10</p>
        <Star size={14} className="fill-yellow-500 text-yellow-500" />
      </div>
    </div>
  );
}

export default RatingMovie;
