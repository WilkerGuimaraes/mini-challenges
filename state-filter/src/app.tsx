import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultThemes } from "./styles/themes/default";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Home } from "./Pages/Home";

const queryClient = new QueryClient();

export function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>

      <GlobalStyles />
    </ThemeProvider>
  );
}
