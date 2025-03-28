import { Greeting1 } from "@/components/Greeting1";
import { serverApi } from "./_trpc/server-api";

export default async function Home() {
  const greeting2 = await serverApi.greeting2({ name: "Next" });

  return (
    <div>
      <div className="bg-blue-100 p-4 rounded-md">
        <p className="text-blue-500 font-bold">Server Component</p>
        <p>{JSON.stringify(greeting2)}</p>
      </div>
      <Greeting1 />
    </div>
  );
}
