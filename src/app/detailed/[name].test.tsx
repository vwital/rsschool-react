import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import DetailedPage from "../../pages/detailed/[name]";

vi.mock("next/router", () => ({
  useRouter: vi.fn(),
}));

describe("Detailed Page component", () => {
  it("Render detailed page", () => {
    (useRouter as jest.Mock).mockReturnValue({
      query: { name: "Test" },
      back: vi.fn(),
    });
    render(<DetailedPage />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
