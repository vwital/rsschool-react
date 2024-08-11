"use client";

import { useState, useEffect } from "react";
import useLocalStorage from "@utils/useLocalStorage";
import axios from "axios";
import SearchBar from "@components/SearchBar/SearchBar";
import ResultList from "@components/ResultsList/ResultsList";
import ErrorBoundary from "@components/ErrorBoundary/ErrorBoundary";
import Loader from "@components/Loader/Loader";
import ErrorComponent from "@components/ErrorBoundary/ErrorComponent";
import BtnThemeMode from "@components/BtnThemeMode/BtnThemeMode";
import { useTheme } from "@components/Theme/ThemeContext";
import Flyout from "@components/Flyout/Flyout";
import { useRouter, useSearchParams } from "next/navigation";
import DetailedCard from "@components/DetailedCard/DetailedCard";
import { IResult } from "@components/ResultsList/interfaces";

function MainPage() {
  const [results, setResults] = useState<IResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageLimit, setPageLimit] = useState(1);
  const { getLocalStorage } = useLocalStorage();
  const { theme } = useTheme();
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchParam = searchParams?.get("search");
  const pageParam = searchParams?.get("page");
  const detailed = searchParams?.get("detailed");

  const [page, setPage] = useState(Number(pageParam) || 1);
  const [searchRequest, setSearchRequest] = useState(
    searchParam?.toString() || "",
  );

  useEffect(() => {
    const requestFromStorage = getLocalStorage();

    if (requestFromStorage && !searchParam) {
      setSearchRequest(requestFromStorage);
      router.push(`/?page=1`, { scroll: false });
      doSearch(requestFromStorage, 1);
    } else {
      doSearch(searchRequest, page);
    }
  }, [searchParam, page]);

  const doSearch = (request: string, pageNumber: number) => {
    setLoading(true);
    axios
      .get(
        `https://swapi.dev/api/planets/?search=${request}&page=${pageNumber}`,
      )
      .then((response) => {
        const resultsCount = Math.ceil(response.data.count / 10);
        setResults(response.data.results);
        setPageLimit(resultsCount);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };

  const handleSearch = (newSearchRequest: string) => {
    setPage(1);
    setSearchRequest(newSearchRequest);
    doSearch(newSearchRequest, 1);
    router.push(`/?page=1`);
  };

  const handleNextPage = () => {
    if (page + 1 > pageLimit) return;
    const nextPage = page + 1;
    router.push(`/?page=${nextPage}`);
    setPage(nextPage);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      const prevPage = page - 1;
      router.push(`/?page=${prevPage}`);
      setPage(prevPage);
    }
  };

  const selectedPlanet = results.find(
    (result: IResult) => result.name === detailed,
  );

  return (
    <ErrorBoundary>
      <div className={`app ${theme}`}>
        <div className="search-section">
          <BtnThemeMode />
          <SearchBar onSearch={handleSearch} />
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

        {detailed && (
          <div className="detailed-page">
            <div className="detailed-info">
              <DetailedCard result={selectedPlanet} />
            </div>
            <div className="overlay"></div>
          </div>
        )}
      </div>
      <Flyout />
    </ErrorBoundary>
  );
}

export default MainPage;
