import { ReactNode } from "react";
import { IResult } from "./interfaces";
import "./resultsList.css";

function ResultList({ results }: { results: IResult[] }): ReactNode {
  if (results.length === 0) {
    return <h2>I didn't find anything. Sorry...</h2>;
  }

  const resultElements = results.map((result: IResult, index: number) => (
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

export default ResultList;
