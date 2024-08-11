"use client";

import { IResult } from "./interfaces";
import { useRouter } from "next/navigation";
function DetailedCard({ result }: { result: IResult | undefined }) {
  const router = useRouter();
  if (!result) {
    return <h2>Sorry</h2>;
  }

  return (
    <div className="detailed-list">
      <button onClick={() => router.back()}>Close</button>
      <h3>{result.name}</h3>
      <p>Rotation period: {result.rotation_period}</p>
      <p>Orbital period: {result.orbital_period}</p>
      <p>Diameter: {result.diameter}</p>
      <p>Climate: {result.climate}</p>
      <p>Gravity: {result.gravity}</p>
      <p>Terrain: {result.terrain}</p>
      <p>Surface water: {result.surface_water}</p>
      <p>Population: {result.population}</p>
    </div>
  );
}

export default DetailedCard;
