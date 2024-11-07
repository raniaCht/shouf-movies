import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Carousel from "./Carousel";
import { getFeaturedActors } from "@/util/getMovies";

import { EmblaOptionsType } from "embla-carousel";
import { ActorType } from "@/util/movieType";

async function ActorSection() {
  const res = await getFeaturedActors();
  const actors: ActorType[] = res.results;
  return (
    <div className="my-5">
      <div className="flex justify-between items-center">
        <h2 className="text-black text-4xl">Featured Casts</h2>
        <Link href="" className="flex items-center gap-2">
          <span className="text-rose-700 text-lg">See more</span>
          <ChevronRight size={12} className="text-red-700" />
        </Link>
      </div>
      <div className="">
        <Carousel slides={actors} type="actor" />
      </div>
    </div>
  );
}

export default ActorSection;
