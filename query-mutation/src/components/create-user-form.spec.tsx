import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CreateUserForm } from "./create-user-form";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
});
