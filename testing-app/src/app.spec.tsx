import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "./app";

describe("App component test", () => {
  it("should render buttons", () => {
    render(<App />);

    expect(screen.getByText("Show posts")).toBeInTheDocument();
    expect(screen.getByText("Clean posts")).toBeInTheDocument();
  });
});
