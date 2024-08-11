import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import DetailedPage from "./page";
import { useRouter } from "next/navigation";

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
  useSearchParams: vi.fn(),
}));

describe("Detailed Page component", () => {
  it("Render detailed page", () => {
    (useRouter as jest.Mock).mockReturnValue({
      query: { name: "Test" },
      back: vi.fn(),
    });
    render(
      <DetailedPage
        params={{
          name: "",
        }}
      />,
    );
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
