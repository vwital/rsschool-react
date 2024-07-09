import { Component, ReactNode } from "react";
import SearchBar from "./components/SearchBar";
import ResultList from "./components/ResultsList";
import ErrorBoundary from "./components/ErrorBoundary";
import Loader from "./components/Loader";
import "./App.css";
import axios from "axios";
import { IResult } from "./components/ResultsList";
import ErrorComponent from "./components/ErrorComponent";

interface State {
  results: IResult[];
  loading: boolean;
  error: string | null;
}
class App extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      results: [],
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    const searchRequest = localStorage.getItem("request") || "";
    this.doSearch(searchRequest);
  }

  doSearch = (request: string) => {
    this.setState({ loading: true });
    axios
      .get(`https://swapi.dev/api/people/?search=${request}`)
      .then((response) => {
        this.setState({ results: response.data.results, loading: false });
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        this.setState({ error: error.message, loading: false });
      });
  };

  render(): ReactNode {
    return (
      <ErrorBoundary>
        <div className="app">
          <SearchBar onSearch={this.doSearch} />
          <ErrorComponent />
          {this.state.loading ? (
            <Loader />
          ) : (
            <ResultList results={this.state.results} />
          )}
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
