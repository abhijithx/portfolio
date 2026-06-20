import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  return (
    <main className="flex-1 relative">
      {/* Background glow layer */}
      <div className="bg-glow" aria-hidden="true" />

      {/* Hero */}
      <Hero />

      {/* Bento Grid */}
      <BentoGrid />

      {/* Footer */}
      <footer className="relative z-10 text-center py-12 md:py-16">
        <p className="text-gray-500 text-sm">© 2026 Abhijith Sudhakaran</p>
      </footer>
    </main>
  );
}
