import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/now_playing"
  );
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmY3NmVkZTlmZWE2YzRhNDRhZjkxOWU2MzYxNjA2ZCIsInN1YiI6IjY1YjYyMmZkMmZhZjRkMDBlN2RjNjhkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Hjuqh54ybu0Dh3JiQyilJ85g4PToShEtg4mXZAtaKY",
    },
  };
  const fetchFunction = useCallback(async () => {
    const responce = await fetch(url, options);
    const data = await responce.json();
    console.log(data.results);
    setMovies(data.results);
  }, [url]);

  useEffect(() => {
    fetchFunction();
  }, [fetchFunction]);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MovieList;
