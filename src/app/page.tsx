"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <button onClick={() => router.push("/jest")}>jest</button>
      <button onClick={() => router.push("/datefns")}>date fns</button>
    </main>
  );
}
