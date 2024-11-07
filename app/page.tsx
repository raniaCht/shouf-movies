import ActorSection from "@/components/ActorSection";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import MovieSection from "@/components/MovieSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-10">
        <MovieSection title="Featured Movie" type="top_rated" />
        <MovieSection title="New Arrival" type="upcoming" />
        <MovieSection title="Now Playing" type="now_playing" />
        <ActorSection />
        <Contact />
      </main>
    </>
  );
}
