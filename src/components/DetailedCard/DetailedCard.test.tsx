import { describe, test as it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DetailedCard from "./DetailedCard";
import { IResult } from "./interfaces";

const mockData: IResult = {
  name: "test",
  rotation_period: "string",
  orbital_period: "10000",
  diameter: "string",
  climate: "string",
  gravity: "string",
  terrain: "grasslands, mountains",
  surface_water: "40",
  population: "2000000000",
};

describe("Detailed Card Component", () => {
  it("render card with transmitted data", () => {
    render(<DetailedCard result={mockData} />);
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(
      screen.getByText(`Terrain: ${mockData.terrain}`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Surface water: ${mockData.surface_water}`),
    ).toBeInTheDocument();
    expect(screen.getByText("Population: 2000000000")).toBeInTheDocument();
  });
  it("data not transferred", () => {
    render(<DetailedCard result={undefined} />);
    expect(screen.getByText("Sorry")).toBeInTheDocument();
  });
});
