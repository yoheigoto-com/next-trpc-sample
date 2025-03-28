"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/react-query";
import React, { useState } from "react";

import { clientApi } from "./client-api";

type TRPCProviderProps = {
  children: React.ReactNode;
};

export default function TRPCProvider({ children }: TRPCProviderProps) {
  const [queryClient] = useState(() => new QueryClient({}));
  const [trpcClient] = useState(() =>
    clientApi.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3003/api/trpc",
        }),
      ],
    })
  );

  return (
    <clientApi.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </clientApi.Provider>
  );
}
