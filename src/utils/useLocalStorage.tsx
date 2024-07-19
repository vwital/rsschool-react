type getFn = () => string;
type setFn = (value: string) => void;

function useLocalStorage() {
  const setLocalStorage: setFn = (newValue) =>
    localStorage.setItem("request", newValue);

  const getLocalStorage: getFn = () => {
    const item = localStorage.getItem("request");
    if (item) {
      return item;
    }
    return "";
  };

  return { setLocalStorage, getLocalStorage };
}

export default useLocalStorage;
