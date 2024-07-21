import { useState, useEffect } from "react";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import SearchBar from "@/components/SearchBar/SearchBar";
import ResultList from "@/components/ResultsList/ResultsList";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";
import Loader from "@/components/Loader/Loader";
import axios from "axios";
import ErrorComponent from "@/components/ErrorBoundary/ErrorComponent";
import "./index.css";
import useLocalStorage from "@utils/useLocalStorage";

function MainPage() {
  const { page: urlPage } = useParams<{ page: string }>();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(parseInt(urlPage!) || 1);
  const [pageLimit, setPageLimit] = useState(1);
  const { getLocalStorage } = useLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    const searchRequest = getLocalStorage() ?? "";
    doSearch(searchRequest, page);
  }, [page]);

  const doSearch = (request: string, pageNumber: number) => {
    setLoading(true);
    navigate(`/pages/${pageNumber}`);
    axios
      .get(
        `https://swapi.dev/api/planets/?search=${request}&page=${pageNumber}`,
      )
      .then((response) => {
        const resultsCount = Math.ceil(response.data.count / 10);
        const searchResults = response.data.results;
        setResults(searchResults);
        setPageLimit(resultsCount);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
        setError(error);
      });
  };

  const handleNextPage = () => {
    if (page + 1 > pageLimit) return;
    if (!loading && !error) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <ErrorBoundary>
      <div className="app">
        <div className="search-section">
          <SearchBar
            onSearch={(searchRequest) => {
              setPage(1);
              doSearch(searchRequest, 1);
            }}
          />
          <ErrorComponent />
          {loading && !error ? <Loader /> : <ResultList results={results} />}
          <div className="pagination-controls">
            <button onClick={handlePrevPage} disabled={page === 1}>
              Prev
            </button>
            <span>{page}</span>
            <button onClick={handleNextPage}>Next</button>
          </div>
        </div>

        <Outlet />
      </div>
    </ErrorBoundary>
  );
}

export default MainPage;
