import { fetchFundersList } from "@/lib/server/fetchFundersList";
import { cacheTag } from "next/cache";

export async function TotalFunders() {
  "use cache";
  const fundersList = await fetchFundersList();
  cacheTag("funders-list");
  const totalFunders = fundersList.length;

  return <p className="text-2xl font-bold text-gray-900">{totalFunders}</p>;
}
