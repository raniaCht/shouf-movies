import Header from "@/components/Header";
import MovieSection from "@/components/MovieSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-10">
        <MovieSection title="Featured Movie" />
      </main>
    </>
  );
}
