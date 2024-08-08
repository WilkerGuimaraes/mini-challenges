import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "./app";

const queryClient = new QueryClient();

describe("App component test", () => {
  it("should render form input and buttons", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );

    expect(screen.getByLabelText(/inputELement/i)).toBeInTheDocument();
    expect(screen.getByText(/Filtrar/i)).toBeInTheDocument();
    expect(screen.getByText(/Limpar/i)).toBeInTheDocument();
  });
});
