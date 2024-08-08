import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@state/store";
import { clearSelectedItems } from "@state/slices/itemsSlice";
import { IResult } from "@components/DetailedCard/interfaces";
import styles from "./style.module.css";

const convertToCSV = (data: IResult[]): string => {
  const headers = [
    "Name",
    "Rotation Period",
    "Orbital Period",
    "Diameter",
    "Climate",
    "Gravity",
    "Terrain",
    "Surface Water",
    "Population",
  ];
  const headerString = headers.join(",");
  const rows = data.map((item) =>
    [
      item.name,
      item.rotation_period,
      item.orbital_period,
      item.diameter,
      item.climate,
      item.gravity,
      item.terrain,
      item.surface_water,
      item.population,
    ].join(","),
  );
  const csvContent = [headerString, ...rows].join("\n");
  return `data:text/csv;charset=utf-8,\uFEFF${encodeURIComponent(csvContent)}`;
};

function Flyout() {
  const dispatch = useDispatch();
  const selectedItems = useSelector(
    (state: RootState) => state.items.selectedItems,
  );

  if (selectedItems.length === 0) {
    return null;
  }

  const handleUnselectAll = () => {
    dispatch(clearSelectedItems());
  };

  return (
    <div className={styles.flyout}>
      <p>{selectedItems.length} items selected</p>
      <button onClick={handleUnselectAll}>Unselect all</button>
      <button>
        <a
          href={convertToCSV(selectedItems)}
          download={`${selectedItems.length}_planets.csv`}
        >
          Download
        </a>
      </button>
    </div>
  );
}

export default Flyout;
