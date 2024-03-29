import React from "react";
import { useSearchParams } from "react-router-dom";
// import Card from "../components/Card";
import useFetch from "../Hooks/useFetch";

const Search = (props) => {
  const [searchPatams] = useSearchParams();
  const queryTerm = searchPatams.get("q");
  const { data: movies } = useFetch(
    "https://api.themoviedb.org/3/" + props.apipath /*+ "&query=" + queryTerm*/
  );

  console.log("inside search =" + props.apipath);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {/* {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))} */}
        </div>
      </section>
    </main>
  );
};

export default Search;
