import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import ResumeWebsite from "@/components/ResumeWebsite";
import { ThemeProvider } from "@/contexts/ThemeContext";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ResumeWebsite />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;