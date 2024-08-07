import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, it, expect } from "vitest";

import { App } from "./app";

const queryCLient = new QueryClient();

describe("Task Component test", () => {
  it("renders form inputs and buttons", () => {
    render(
      <QueryClientProvider client={queryCLient}>
        <App />
      </QueryClientProvider>
    );

    expect(screen.getByLabelText(/Usuário 1/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Usuário 2/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Usuário 3/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Usuário 4/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Usuário 5/i)).toBeInTheDocument();

    expect(screen.getByText(/Filtrar/i)).toBeInTheDocument();
    expect(screen.getByText(/Limpar/i)).toBeInTheDocument();
  });

  it("renders all data of all users", async () => {
    render(
      <QueryClientProvider client={queryCLient}>
        <App />
      </QueryClientProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 1500));

    expect(
      await screen.findByText(
        /sunt aut facere repellat provident occaecati excepturi optio reprehenderit/i
      )
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/et ea vero quia laudantium autem/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        /asperiores ea ipsam voluptatibus modi minima quia sint/i
      )
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/ullam ut quidem id aut vel consequuntur/i)
    ).toBeInTheDocument();
    expect(await screen.findByText(/non est facere/i)).toBeInTheDocument();
  });
});
