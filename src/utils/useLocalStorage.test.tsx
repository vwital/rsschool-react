import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import useLocalStorage from "./useLocalStorage";

describe("Local storage", () => {
  it("Save and read from local storage", () => {
    const { setLocalStorage, getLocalStorage } = useLocalStorage();
    setLocalStorage("test");
    const value = "test";
    expect(getLocalStorage()).toStrictEqual(value);
  });
});
