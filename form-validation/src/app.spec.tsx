import { render, screen } from "@testing-library/react";

import { App } from "./app";

describe("App Component test", () => {
  it("should renders form inputs", () => {
    render(<App />);
    expect(screen.getByLabelText(/Nome:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha:/i)).toBeInTheDocument();
    expect(screen.getByText(/Adicionar/i)).toBeInTheDocument();
  });
});
