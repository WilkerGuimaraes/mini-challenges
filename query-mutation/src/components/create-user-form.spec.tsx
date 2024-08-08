import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { CreateUserForm } from "./create-user-form";

const queryClient = new QueryClient();

describe("CreateUserForm testing", () => {
  it("should render the form", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CreateUserForm />
      </QueryClientProvider>,
    );

    expect(screen.getByLabelText(/Nome:/i));
    expect(screen.getByLabelText(/E-mail:/i));
    expect(screen.getByText(/Enviar/i));
  });

  it("should render form validation errors", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CreateUserForm />
      </QueryClientProvider>,
    );

    const sendButton = screen.getByText(/Enviar/i);
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.getByText(/O nome é obrigatório./i)).toBeInTheDocument();
      expect(screen.getByText(/O e-mail é obrigatório./i)).toBeInTheDocument();
    });
  });
});
