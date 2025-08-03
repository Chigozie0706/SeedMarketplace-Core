"use client";
import { Farmer } from "@/src/interfaces/farmer";

interface Props {
  farmer: Farmer;
}

export default function FarmerCard({ farmer }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border p-4">
      <img
        src={farmer.image}
        alt={farmer.name}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <h2 className="text-lg font-semibold">{farmer.name}</h2>
      <p className="text-sm text-gray-600">{farmer.location}</p>
      <p className="mt-2 text-sm text-gray-700">{farmer.description}</p>
    </div>
  );
}
