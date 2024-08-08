import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
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

  it("should render all comments", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );

    await new Promise((resolve) => setTimeout(resolve, 1500));

    expect(await screen.findByText(/Total de comentários: 500/i));
    expect(await screen.findByText(/id labore ex et quam laborum/i));
  });

  it("should render filtered comments", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const inputElement = screen.getByLabelText(/inputELement/i);
    fireEvent.change(inputElement, { target: { value: 25 } });

    const filterButton = screen.getByText(/Filtrar/i);
    fireEvent.click(filterButton);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    expect(await screen.findByText(/Annabelle@cole.com/i));
    expect(await screen.findByText(/Kacey@jamal.info/i));
    expect(await screen.findByText(/Mina@mallie.name/i));
    expect(await screen.findByText(/Hudson.Blick@ruben.biz/i));
    expect(await screen.findByText(/Domenic.Durgan@joaquin.name/i));
    expect(await screen.findByText(/Total de comentários: 5/i));
  });

  it("should clearing comments filter", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const inputElement = screen.getByLabelText(/inputELement/i);
    fireEvent.change(inputElement, { target: { value: 72 } });

    const filterButton = screen.getByText(/Filtrar/i);
    fireEvent.click(filterButton);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    expect(await screen.findByText(/qui vel id qui est/i));
    expect(await screen.findByText(/Total de comentários: 5/i));

    const clearButton = screen.getByText(/Limpar/i);
    fireEvent.click(clearButton);

    expect(
      screen.getByText(/id labore ex et quam laborum/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Total de comentários: 500/i)).toBeInTheDocument();
  });
});
