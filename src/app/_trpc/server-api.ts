import { httpBatchLink } from "@trpc/client";

import { appRouter, AppRouter } from "@/server";

export const serverApi = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: "http://localhost:3003/api/trpc",
    }),
  ],
});
