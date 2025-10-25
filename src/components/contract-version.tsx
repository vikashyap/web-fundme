import { fetchContractVersion } from "@/lib/server/fetchContractVersion";

export async function ContractVersion() {
  "use cache";
  console.log("Fetching contract version...");
  const version = await fetchContractVersion();
  return <p className="text-2xl font-bold text-gray-900">v{version}</p>;
}
