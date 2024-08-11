import { describe, test as it, expect } from "vitest";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Flyout from "./Flyout";
import { store } from "@state/store";
import { Provider } from "react-redux";
import { convertToCSV } from "./Flyout";
import { IResult } from "@components/DetailedCard/interfaces";

describe("Flyout Component", () => {
  it("render flyout component", () => {
    <Provider store={store}>
      <Flyout />
    </Provider>;

    expect(screen.queryByText(/items selected/i)).toBeNull();
    expect(screen.queryByText("Unselect all")).toBeNull();
    expect(screen.queryByText("Download")).toBeNull();
  });
});

describe("convertToCSV", () => {
  it("should convert data ", () => {
    const mockData: IResult[] = [
      {
        name: "Tatooine",
        rotation_period: "23",
        orbital_period: "304",
        diameter: "10465",
        climate: "arid",
        gravity: "1 standard",
        terrain: "desert",
        surface_water: "1",
        population: "200000",
      },
      {
        name: "Alderaan",
        rotation_period: "24",
        orbital_period: "364",
        diameter: "12500",
        climate: "temperate",
        gravity: "1 standard",
        terrain: "grasslands, mountains",
        surface_water: "40",
        population: "2000000000",
      },
    ];

    const expectedCSV = `data:text/csv;charset=utf-8,\uFEFF${encodeURIComponent(
      `Name,Rotation Period,Orbital Period,Diameter,Climate,Gravity,Terrain,Surface Water,Population\nTatooine,23,304,10465,arid,1 standard,desert,1,200000\nAlderaan,24,364,12500,temperate,1 standard,grasslands, mountains,40,2000000000`,
    )}`;

    const result = convertToCSV(mockData);

    expect(result).toBe(expectedCSV);
  });
});
