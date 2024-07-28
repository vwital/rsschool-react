import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { IResult } from "./interfaces";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { selectItem, unselectItem } from "../../state/slices/itemsSlice";

function ResultList({ results }: { results: IResult[] }): ReactNode {
  const dispatch = useDispatch();
  const selectedItems = useSelector(
    (state: RootState) => state.items.selectedItems,
  );

  if (results.length === 0) {
    return <h2>I didn't find anything. Sorry...</h2>;
  }

  const handleCheckboxChange = (item: IResult) => {
    if (selectedItems.some((selectedItem) => selectedItem.name === item.name)) {
      dispatch(unselectItem(item.name));
    } else {
      dispatch(selectItem(item));
    }
  };

  const resultElements = results.map((result: IResult, index: number) => (
    <li className="result-element" key={index}>
      <h3>{result.name}</h3>
      <p>Rotation period: {result.rotation_period}</p>
      <p>Orbital period: {result.orbital_period}</p>
      <p>Diameter: {result.diameter}</p>
      <label>
        <input
          type="checkbox"
          checked={selectedItems.some(
            (selectedItem) => selectedItem.name === result.name,
          )}
          onChange={() => handleCheckboxChange(result)}
        />
        Select / Unselect
      </label>
      <button>
        <NavLink to={`${result.name}`}> Detailed</NavLink>
      </button>
    </li>
  ));

  return <ul className="results-list">{resultElements}</ul>;
}

export default ResultList;
