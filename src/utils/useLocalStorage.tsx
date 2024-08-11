"use client";

type getFn = () => string;
type setFn = (value: string) => void;

function useLocalStorage() {
  const setLocalStorage: setFn = (newValue) => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("request", newValue);
    }
  };

  const getLocalStorage: getFn = () => {
    let item;
    if (typeof localStorage !== "undefined") {
      item = localStorage.getItem("request");
    }
    if (item) {
      return item;
    }
    return "";
  };

  return { setLocalStorage, getLocalStorage };
}

export default useLocalStorage;
