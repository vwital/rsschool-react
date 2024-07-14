import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import ResultList from "@/components/ResultsList/ResultsList";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";
import Loader from "@/components/Loader/Loader";
import axios from "axios";
import ErrorComponent from "@/components/ErrorBoundary/ErrorComponent";

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchRequest = localStorage.getItem("request") || "";
    doSearch(searchRequest);
  }, []);

  const doSearch = (request: string) => {
    setLoading(true);
    axios
      .get(`https://swapi.dev/api/people/?search=${request}`)
      .then((response) => {
        const searchResults = response.data.results;
        setResults(searchResults);
        setLoading(false);
        console.log(searchResults);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
        setError(error);
      });
  };

  return (
    <ErrorBoundary>
      <div className="app">
        <SearchBar onSearch={doSearch} />
        <ErrorComponent />
        {loading && !error ? <Loader /> : <ResultList results={results} />}
      </div>
    </ErrorBoundary>
  );
}

export default App;
