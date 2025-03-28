"use client";
import { clientApi } from "@/app/_trpc/client-api";

export function Greeting1() {
  const greeting1 = clientApi.greeting1.useQuery();

  return (
    <div className="rounded-md bg-neutral-100 p-4">
      <p className="font-bold text-neutral-500">Client Component</p>
      <p>{JSON.stringify(greeting1.data)}</p>
    </div>
  );
}
