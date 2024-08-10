import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import ResultList from "./ResultsList";
import { IResult } from "./interfaces";
import { store } from "@state/store";
import { Provider } from "react-redux";

vi.mock("next/router", () => ({
  useRouter: () => ({
    back: vi.fn(),
  }),
}));

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
    <Provider store={store}>
      <BrowserRouter>
        <ResultList results={data} />;
      </BrowserRouter>
    </Provider>,
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
