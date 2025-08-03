import { FARMERS } from "@/src/constants/seeds";
import FarmerCard from "@/src/components/FarmerCard";

export default function FarmersPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Discover Farmers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {FARMERS.map((farmer) => (
          <FarmerCard key={farmer.id} farmer={farmer} />
        ))}
      </div>
    </div>
  );
}
