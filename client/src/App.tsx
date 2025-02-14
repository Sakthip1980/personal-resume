import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import ResumeWebsite from "@/components/ResumeWebsite";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ResumeWebsite />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;