export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
export default async function getMovies(
  time: number = 0,
  shouldError: boolean = false
) {
  await delay(time);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
    },
  };

  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );
  if (!res.ok || shouldError) {
    throw new Error(`An error has occured ${res.status}`);
  }

  return res.json();
}

export async function getMovie(
  id: number,
  time: number = 0,
  shouldError: boolean = false
) {
  await delay(time);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
    },
  };

  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options);
  if (!res.ok || shouldError) {
    throw new Error(`An error has occured ${res.status}`);
  }

  return res.json();
}
