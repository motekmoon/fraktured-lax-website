import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />

      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-12">
        <div className="relative w-full max-w-4xl">
          <Image
            src="/hero-image.png"
            alt="FRAKTURED LAX"
            width={1200}
            height={800}
            priority
            className="h-auto w-full rounded-lg object-cover shadow-xl grayscale transition-all duration-500 hover:grayscale-0"
          />
          <p className="mt-8 text-center text-xl font-medium text-zinc-600 dark:text-zinc-400">
            New Website Coming Soon...
          </p>
        </div>
      </main>
    </div>
  );
}
