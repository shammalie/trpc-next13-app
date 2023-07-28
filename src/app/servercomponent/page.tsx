import { caller } from "@/server/api/root";

/** This is a React Server Component */
export default async function rscPage() {
  // call the tRPC endpoint
  const result = await caller.example.getAll();

  // we render this output on the server
  return <p>Hi, {result.name}, greetings from RSC land!</p>;
}
