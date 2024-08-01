import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { App } from "./app";

describe("App Component test", () => {
  it("should renders form inputs", () => {
    render(<App />);

    expect(screen.getByLabelText(/Nome:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha:/i)).toBeInTheDocument();
  });

  it("should add and remove tech fields", async () => {
    render(<App />);

    fireEvent.click(screen.getByText(/Adicionar/i));
    await waitFor(() => {
      const fields = screen.getAllByLabelText(/Título:/i);
      expect(fields).toHaveLength(1);
    });

    fireEvent.click(screen.getByText(/Adicionar/i));
    await waitFor(() => {
      const fields = screen.getAllByLabelText(/Título:/i);
      expect(fields).toHaveLength(2);
    });

    fireEvent.click(screen.getAllByText(/Remover/i)[0]);
    await waitFor(() => {
      const fields = screen.getAllByLabelText(/Título:/i);
      expect(fields).toHaveLength(1);
    });
  });

  it("should validate form on submit", async () => {
    render(<App />);

    fireEvent.click(screen.getByText(/Salvar/i));
    expect(await screen.findAllByText(/obrigatório/i)).toHaveLength(2);
    expect(await screen.findAllByText(/menos/i)).toHaveLength(2);
  });

  it("should submits form with valid data", async () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText(/Nome:/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/E-mail:/i), {
      target: { value: "johndow@acme.com" },
    });
    fireEvent.change(screen.getByLabelText(/Senha:/i), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByText(/Adicionar/i));
    fireEvent.change(screen.getAllByLabelText(/Título:/i)[0], {
      target: { value: "React" },
    });
    fireEvent.change(screen.getAllByLabelText(/Quantidade:/i)[0], {
      target: { value: "30" },
    });

    fireEvent.click(screen.getByText(/Adicionar/i));
    fireEvent.change(screen.getAllByLabelText(/Título:/i)[1], {
      target: { value: "TypeScript" },
    });
    fireEvent.change(screen.getAllByLabelText(/Quantidade:/i)[1], {
      target: { value: "50" },
    });

    fireEvent.click(screen.getByText(/Salvar/i));
    expect(await screen.findByText(/John Doe/i)).toBeInTheDocument();
    expect(await screen.findByText(/johndow@acme.com/i)).toBeInTheDocument();
    expect(await screen.findByText(/React/i)).toBeInTheDocument();
    expect(await screen.findByText(/TypeScript/i)).toBeInTheDocument();
  });
});
