import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 relative">
      {/* Background glow layer */}
      <div className="bg-glow" aria-hidden="true" />

      <div className="mx-auto max-w-7xl relative z-10">
        <Hero />
        <BentoGrid />
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">© 2026 Abhijith Sudhakaran</p>
        </div>
      </div>
    </main>
  );
}
