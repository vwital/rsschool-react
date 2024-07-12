import { Component, ReactNode } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ResultList from "./components/ResultsList/ResultsList";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Loader from "./components/Loader/Loader";
import axios from "axios";
import { IResult } from "./components/ResultsList/interfaces";
import ErrorComponent from "@/components/ErrorBoundary/ErrorComponent";

interface IAppState {
  results: IResult[] | [];
  loading: boolean;
  error: string | null;
}
class App extends Component<object, IAppState> {
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
        console.log(response.data.results);
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
