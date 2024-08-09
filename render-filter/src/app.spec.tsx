import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "./app";

const queryClient = new QueryClient();

describe("App component test", () => {
  it("should render form inputs and buttons", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );

    expect(screen.getByLabelText("Ativado")).toBeInTheDocument();
    expect(screen.getByLabelText(/Desativado/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Cooking/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mapleton/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/77890/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Idade acima de 30/i)).toBeInTheDocument();

    expect(screen.getByText(/Filtrar/i)).toBeInTheDocument();
    expect(screen.getByText(/Limpar/i)).toBeInTheDocument();
  });
});
