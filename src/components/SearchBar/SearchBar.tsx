import { Component, ReactNode } from "react";
import "./searchBar.css";

interface Props {
  onSearch: (request: string) => void;
}

interface State {
  request: string;
}

class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const requestFromLocalStorage = localStorage.getItem("request") || "";
    this.state = {
      request: requestFromLocalStorage,
    };
  }

  trackInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ request: e.target.value });
  };

  handleSearch = () => {
    const searchRequest = this.state.request.trim();
    this.props.onSearch(searchRequest);
    localStorage.setItem("request", searchRequest);
  };

  render(): ReactNode {
    return (
      <div className="search-field">
        <input
          type="text"
          placeholder="Enter your request"
          value={this.state.request}
          onChange={this.trackInput}
        ></input>
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
