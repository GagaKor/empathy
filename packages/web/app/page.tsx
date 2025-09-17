import { getApiBase } from "@/lib/env";

export default function Home() {
  const apiBase = getApiBase();
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Home</h1>
      <p>{apiBase}</p>
    </main>
  );
}
