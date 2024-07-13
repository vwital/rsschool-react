import { ReactNode, useState } from "react";
import "./searchBar.css";

interface IProps {
  onSearch: (request: string) => void;
}

function SearchBar(props: IProps): ReactNode {
  const defaultValue = localStorage.getItem("request") || "";
  const [value, setValue] = useState(defaultValue);

  const handleSearch = () => {
    const searchRequest = value.trim();
    localStorage.setItem("request", searchRequest);
    props.onSearch(searchRequest);
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
          if (event.key === "Enter") handleSearch();
        }}
      ></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
