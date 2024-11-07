export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export async function getGenres() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
    },
  };
  const result = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    options
  );
  if (!result.ok) {
    throw new Error(`An error has occured ${result.status}`);
  }

  return result.json();
}

export async function getMoviesByType(type: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
    },
  };

  const result = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`,
    options
  );
  if (!result.ok) {
    throw new Error(`An error has occured ${result.status}`);
  }

  return result.json();
}

export async function getFeaturedActors(
  time: number = 0,
  shouldError: boolean = false
) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
    },
  };

  const result = await fetch(
    "https://api.themoviedb.org/3/trending/person/day?language=en-US",
    options
  );
  if (!result.ok || shouldError) {
    throw new Error(`An error has occured ${result.status}`);
  }

  return result.json();
}

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
