import { Route, Routes } from "react-router-dom";
import { MovieDetail, MovieList, Search, PageNotFound } from "../pages";

import React from "react";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList apipath="movie/now_playing" />} />
        <Route path="movies/:id" element={<MovieDetail />} />
        <Route
          path="movies/popular"
          element={<MovieList apipath="movie/popular" />}
        />
        <Route
          path="movies/top"
          element={<MovieList apipath="movie/top_rated" />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieList apipath="movie/upcoming" />}
        />
        <Route path="search" element={<Search apipath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
