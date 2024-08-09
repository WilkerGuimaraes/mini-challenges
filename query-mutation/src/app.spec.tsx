import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "./app";
import { CreateUserForm } from "./components/create-user-form";

const queryClient = new QueryClient();

describe("App testing", () => {
  it("should render CreateUserForm component and all users data", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );

    expect(<CreateUserForm />);

    await waitFor(() => {
      expect(screen.findByText(/John Doe/i));
      expect(screen.findByText(/Jane Doe/i));
      expect(screen.findByText(/Steve Jobs/i));
      expect(screen.findByText(/Diego Stone/i));
      expect(screen.findByText(/Maria Vergil/i));
    });
  });
});
