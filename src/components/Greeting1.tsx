"use client";
import { clientApi } from "@/app/_trpc/client-api";

export function Greeting1() {
  const greeting1 = clientApi.greeting1.useQuery();

  return (
    <div className="bg-neutral-100 p-4 rounded-md">
      <p className="text-neutral-500 font-bold">Client Component</p>
      <p>{JSON.stringify(greeting1.data)}</p>
    </div>
  );
}
