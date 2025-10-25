import { useUsdEstimate } from "@/hooks/useUsdEstimate";

import { useEffect } from "react";

export function EstimatedUSD({ fundAmount }: { fundAmount?: string }) {
  const { usdEstimate } = useUsdEstimate(fundAmount || "0");
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Estimated USD Value</span>
        <span className="font-medium text-gray-900">
          ${usdEstimate || "0.00"}
        </span>
      </div>
    </div>
  );
}
