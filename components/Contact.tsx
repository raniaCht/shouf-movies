import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <div className="min-h-[500px] flex flex-col justify-center items-center gap-10">
      <div className="flex justify-center items-center gap-16 text-black">
        <Link href="#" className="bg-gray-200 p-2 rounded-lg">
          <Facebook />
        </Link>
        <Link href="#" className="bg-gray-200 p-2 rounded-lg">
          <Instagram />
        </Link>
        <Link href="#" className="bg-gray-200 p-2 rounded-lg">
          <Twitter />
        </Link>
        <Link href="#" className="bg-gray-200 p-2 rounded-lg">
          <Youtube />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-10 text-black font-semibold">
        <Link href="">Conditions of Use</Link>
        <Link href="">Privacy & Policy</Link>
        <Link href="">Press Room</Link>
      </div>
      <span className="text-gray-500 font-bold">
        © 2021 MovieBox by Rania Chettab{" "}
      </span>
    </div>
  );
}

export default Contact;
