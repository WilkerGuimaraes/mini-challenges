import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { App } from "./app";

const queryCLient = new QueryClient();

describe("Task Component test", () => {
  it("renders form inputs and buttons", () => {
    render(
      <QueryClientProvider client={queryCLient}>
        <App />
      </QueryClientProvider>
    );

    expect(screen.getByLabelText(/Usuário 1/i));
    expect(screen.getByLabelText(/Usuário 2/i));
    expect(screen.getByLabelText(/Usuário 3/i));
    expect(screen.getByLabelText(/Usuário 4/i));
    expect(screen.getByLabelText(/Usuário 5/i));

    expect(screen.getByText(/Filtrar/i));
    expect(screen.getByText(/Limpar/i));
  });
});
