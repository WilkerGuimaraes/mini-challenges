import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "./app";

describe("App component test", () => {
  it("should render buttons", () => {
    render(<App />);

    expect(screen.getByText("Show posts")).toBeInTheDocument();
    expect(screen.getByText("Clean posts")).toBeInTheDocument();
  });

  it("should render posts", async () => {
    render(<App />);

    const showPostsButton = screen.getByText("Show posts");
    fireEvent.click(showPostsButton);
    expect(
      await screen.findByText(/id labore ex et quam laborum/i),
    ).toBeInTheDocument();
  });
});
