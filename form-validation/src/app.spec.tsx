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
});
