"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
export default function FilterBar() {
  const router = useRouter();
  const params = useSearchParams();

  function updateFilter(key, value) {
    const newParams = new URLSearchParams(params.toString());

    if (value) newParams.set(key, value);
    else newParams.delete(key);

    router.push(`/products?${newParams.toString()}`);
  }

  return (
    <div className="flex gap-4 mb-6">

      <select
        onChange={e => updateFilter("category", e.target.value)}
        className="border p-2 "
        defaultValue={params.get("category") || ""}
      >
         <option value="">All</option>
  <option value="men's clothing">Men</option>
  <option value="women's clothing">Women</option>
  <option value="electronics">Electronics</option>
  <option value="jewelery">Jewellery</option>
      </select>

      <Input
        placeholder="Search..."
        onChange={e => updateFilter("search", e.target.value)}
        className="border p-2"
        defaultValue={params.get("search") || ""}
      />

      <Input
        type="number"
        placeholder="Min Price"
        onChange={e => updateFilter("minPrice", e.target.value)}
        className="border p-2 w-32"
        defaultValue={params.get("minPrice") || ""}
      />
    </div>
  );
}
