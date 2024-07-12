import { Component } from "react";
import { IResultProps } from "./interfaces";
import "./resultsList.css";

class ResultList extends Component<IResultProps> {
  render() {
    const { results } = this.props;

    if (results.length === 0) {
      return <h2>I didn't find anything. Sorry...</h2>;
    }

    const resultElements = results.map((result, index) => (
      <li className="person-list" key={index}>
        <h3>{result.name}</h3>
        <p>Height: {result.height}cm</p>
        <p>Mass: {result.mass}kg</p>
        <p>Hair color: {result.hair_color}</p>
        <p>Skin color: {result.skin_color}</p>
        <p>Eye color: {result.eye_color}</p>
        <p>Birth year: {result.birth_year}</p>
        <p>Gender: {result.gender}</p>
      </li>
    ));

    return <ul>{resultElements}</ul>;
  }
}

export default ResultList;
