import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultList from "./ResultsList";
import { IResult } from "./interfaces";
import { Provider } from "react-redux";
import { store } from "@state/store";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    back: vi.fn(),
  }),
  useSearchParams: () => ({
    get: vi.fn(),
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
      <ResultList results={data} />
    </Provider>,
  );

describe("Results List Component", () => {
  it("renders the exact number of components", () => {
    renderComponent(mockDataArray);
    const listItems = screen.getAllByRole("listitem");
    const list = screen.getByRole("list");
    expect(listItems).toHaveLength(5);
    expect(list).toBeInTheDocument();
  });

  it("renders error message if data is empty", () => {
    renderComponent([]);
    const messageText = screen.getByText(/I didn't find anything. Sorry.../i);
    expect(messageText).toBeInTheDocument();
  });
});
