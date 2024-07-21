import { KeyboardEvent, ReactNode, useState } from "react";
import useLocalStorage from "@utils/useLocalStorage";
import IProps from "./interfaces";
import "./index.css";

function SearchBar({ onSearch }: IProps): ReactNode {
  const { setLocalStorage, getLocalStorage } = useLocalStorage();
  const defaultValue = getLocalStorage() ?? "";
  const [value, setValue] = useState(defaultValue);

  const handleSearch = () => {
    const searchRequest = value.trim();
    setLocalStorage(searchRequest);
    onSearch(searchRequest);
  };

  const handleEnterPressed = (event: KeyboardEvent) => {
    if (event.key === "Enter") handleSearch();
  };

  return (
    <div className="search-field">
      <input
        type="text"
        placeholder="Enter your request"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        onKeyDown={(event) => {
          handleEnterPressed(event);
        }}
      ></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
