"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <button onClick={() => router.push("/jest")}>jest</button>
      <button onClick={() => router.push("/datefns")}>date fns</button>
      <button onClick={() => router.push("/reacthookforms")}>
        react hook form
      </button>
    </main>
  );
}
