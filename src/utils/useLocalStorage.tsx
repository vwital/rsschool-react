function useLocalStorage() {
  const setQuery = (value: string) => localStorage.setItem("request", value);
  const getQuery = () => localStorage.getItem("request") || "";

  return [setQuery, getQuery];
}

export default useLocalStorage;
