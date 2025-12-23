import Header from "./components/Header";
import HeroImage from "./components/HeroImage";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />

      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-12">
        <div className="relative w-full max-w-4xl">
          <HeroImage />
          <p className="mt-8 text-center text-xl font-medium text-zinc-600 dark:text-zinc-400">
            New Website Coming Soon...
          </p>
        </div>
      </main>
    </div>
  );
}
