import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "./app";

describe("App component test", () => {
  it("should render buttons", () => {
    render(<App />);

    expect(screen.getByText("Show comments")).toBeInTheDocument();
    expect(screen.getByText("Clear comments")).toBeInTheDocument();
  });

  it("should render comments", async () => {
    render(<App />);

    const showCommentsButton = screen.getByText("Show comments");
    fireEvent.click(showCommentsButton);
    expect(
      await screen.findByText(/id labore ex et quam laborum/i),
    ).toBeInTheDocument();
  });

  it("should clearing comments after rendering", async () => {
    render(<App />);

    const showCommentsButton = screen.getByText("Show comments");
    fireEvent.click(showCommentsButton);
    expect(
      await screen.findByText(/id labore ex et quam laborum/i),
    ).toBeInTheDocument();

    const clearCommentsButton = screen.getByText("Clear comments");
    fireEvent.click(clearCommentsButton);
    expect(
      screen.queryByText(/id labore ex et quam laborum/i),
    ).not.toBeInTheDocument();
  });
});
