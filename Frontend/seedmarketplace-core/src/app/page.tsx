// src/app/page.tsx
import { SEEDS } from "@/src/constants/seeds";
import SeedCard from "@/components/SeedCard";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Explore Seeds</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {SEEDS.map((seed) => (
          <SeedCard key={seed.id} seed={seed} />
        ))}
      </div>
    </div>
  );
}
