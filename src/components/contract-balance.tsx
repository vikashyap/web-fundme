// components/ContractBalance.tsx
import { fetchContractBalance } from "@/lib/server/fetchContractBalance";
import { cacheTag } from "next/cache";

export async function ContractBalance() {
  "use cache";
  const contractBalance = await fetchContractBalance();
  cacheTag("contract-balance");

  return (
    <p className="text-2xl font-bold text-gray-900">{contractBalance} ETH</p>
  );
}
