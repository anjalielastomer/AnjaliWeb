"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 60s, not 24h. The old 24h default meant an admin edit could take
            // a full day to appear for a visitor whose cache was still warm.
            // The server-side cache (see /cached route) absorbs the DB cost, so
            // a short client staleTime is cheap and keeps content fresh.
            staleTime: 60 * 1000,
            gcTime: 24 * 60 * 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
     </QueryClientProvider>
  );
}
