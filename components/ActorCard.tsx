import { ActorType } from "@/util/movieType";
import Image from "next/image";
import React from "react";

function ActorCard({ actor }: { actor: ActorType }) {
  return (
    <div className="ml-8 flex-shrink-0 flex-grow-0 w-[50%] md:w-[20%] translate-0">
      <div className="flex flex-col w-full text-black">
        <Image
          src={`http://image.tmdb.org/t/p/original${actor.profile_path}`}
          width={100}
          height={100}
          alt=""
          className="w-full h-auto"
        />
        <h3 className="text-black text-lg mt-2">{actor.name}</h3>
      </div>
    </div>
  );
}

export default ActorCard;
