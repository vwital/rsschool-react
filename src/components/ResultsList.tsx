import { Component } from "react";

export interface IResult {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

interface Props {
  results: IResult[];
}

class ResultList extends Component<Props> {
  render() {
    const { results } = this.props;

    if (results.length === 0) {
      return <h2>I didn't find anything. Sorry...</h2>;
    }

    return (
      <ul>
        {results.map((result, index) => (
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
        ))}
      </ul>
    );
  }
}

export default ResultList;
