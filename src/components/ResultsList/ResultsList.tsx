import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { IResult } from "./interfaces";
import "./resultsList.css";

function ResultList({
  results,
}: {
  results: IResult[];
  page: number;
}): ReactNode {
  if (results.length === 0) {
    return <h2>I didn't find anything. Sorry...</h2>;
  }

  const resultElements = results.map((result: IResult, index: number) => (
    <li className="result-element" key={index}>
      <h3>{result.name}</h3>
      <p>Rotation period: {result.rotation_period}</p>
      <p>Orbital period: {result.orbital_period}</p>
      <p>Diameter: {result.diameter}</p>
      <button>
        <NavLink to={`${result.name}`}> Detailed</NavLink>
      </button>
    </li>
  ));

  return <ul className="results-list">{resultElements}</ul>;
}

export default ResultList;
