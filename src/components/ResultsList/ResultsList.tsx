import { ReactNode } from "react";
import { IResult } from "./interfaces";
import "./resultsList.css";
import { NavLink } from "react-router-dom";

function ResultList({ results }: { results: IResult[] }): ReactNode {
  if (results.length === 0) {
    return <h2>I didn't find anything. Sorry...</h2>;
  }

  const resultElements = results.map((result: IResult, index: number) => (
    <li className="person-list" key={index}>
      <h3>{result.name}</h3>
      <p>Rotation period: {result.rotation_period}</p>
      <p>Orbital period: {result.orbital_period}</p>
      <p>Diameter: {result.diameter}</p>
      <button>
        <NavLink
          className={"detailed-link"}
          key={result.name}
          to={`/page/${result.id}/details/${result.name}`}
        >
          Detailed
        </NavLink>
      </button>
    </li>
  ));

  return <ul className="results-list">{resultElements}</ul>;
}

export default ResultList;
