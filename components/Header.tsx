import { CirclePlay, Menu, Play, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RatingMovie from "./RatingMovie";

function Header() {
  return (
    <div className="bg-header bg-no-repeat bg-cover h-[700px] py-5">
      <div className="flex h-full flex-col items-center container mx-auto">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-start items-center gap-6">
            <Image src="/tv.png" width={50} height={50} alt="logo" />
            <h3 className="text-2xl hidden md:block">MovieBox</h3>
          </div>
          <div className="border border-white relative min-w-[400px] hidden lg:block">
            <input
              className="bg-transparent w-full py-2 px-4"
              placeholder="What do you want to watch?"
            />
            <Search
              color="#ffffff"
              strokeWidth={1}
              size={16}
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
            />
          </div>
          <div className="flex justify-end items-center gap-6">
            <Link href="">Sign in</Link>
            <button className="rounded-full bg-rose-700 w-9 h-9 flex justify-center items-center">
              <Menu color="#ffffff" strokeWidth={1} />
            </button>
          </div>
        </div>
        <div className="flex-1 w-full flex flex-col justify-center items-start">
          <div className="flex flex-col justify-center items-start gap-2 w-[400px]">
            <h1 className="text-6xl font-bold">John Wick 3 : Parabellum</h1>
            <RatingMovie voteAverage={97} voteCount={89} />
            <p>
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
            <button className="bg-rose-700 rounded-lg px-4 py-2 flex justify-center items-center gap-2">
              <span className="rounded-full bg-white w-5 h-5 flex justify-center items-center">
                <Play className="fill-rose-700" />
              </span>
              <span>Watch trailer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
