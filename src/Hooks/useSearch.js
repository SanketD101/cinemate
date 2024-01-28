import React from "react";
import AllRoutes from "../routes/AllRoutes";
import useFetch from "./useFetch";

function useSearch({ api }) {
  const [data, setData] = useState([]);
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
    // console.log(data.results);
    setData(data.results);
  }, [url]);

  useEffect(() => {
    fetchFunction();
  }, [fetchFunction]);

  return { data };
}

export default useSearch;
