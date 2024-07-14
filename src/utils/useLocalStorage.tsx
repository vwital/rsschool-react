import { useState, useEffect } from "react";

function useLocalStorage(initQuery = " ") {
  const [query, setQuery] = useState(() => {
    const ls = localStorage.getItem("request") || initQuery;
    return ls;
  });
  useEffect(() => {
    return () => {
      localStorage.setItem("request", query);
    };
  }, [query]);

  return [query, setQuery];
}

export default useLocalStorage;
