import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import ResumeWebsite from "@/components/ResumeWebsite";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ResumeWebsite />
    </QueryClientProvider>
  );
}

export default App;