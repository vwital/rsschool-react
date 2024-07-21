// import '@testing-library/jest-dom';
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import ResultList from "./ResultsList";
import { IResult } from "./interfaces";

const mockData: IResult = {
  name: "string",
  rotation_period: "string",
  orbital_period: "string",
  diameter: "string",
  climate: "string",
  gravity: "string",
  terrain: "string",
  surface_water: "string",
  population: "string",
};
const mockDataArray: IResult[] = Array(5).fill(mockData);

const renderComponent = (data: IResult[]) =>
  render(
    <BrowserRouter>
      <ResultList results={data} />;
    </BrowserRouter>,
  );

describe("Results List Component", () => {
  it(" render the exact number of components", () => {
    renderComponent(mockDataArray);
    const searchedElements = screen.getAllByRole("listitem");
    const listElem = screen.getByRole("list");
    expect(searchedElements).toHaveLength(5);
    expect(listElem).toBeInTheDocument();
  });

  it("render error message if data is empty ", () => {
    renderComponent([]);
    const messageText = screen.getByText(/I didn't find anything. Sorry.../i);
    expect(messageText).toBeInTheDocument();
  });
});
