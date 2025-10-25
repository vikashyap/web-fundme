// hooks/useUsdEstimate.ts
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { readContract } from '@wagmi/core';
import { serverConfig } from '@/lib/wagmi';
import { fundMeABI, FUND_ME_CONTRACT_ADDRESS } from '@/lib/contract';

import { parseEther } from 'viem';

// Unique key per input so each amount is cached separately:
export function usdEstimateKey(nativeAmount: string | bigint | number) {
  return ['usdEstimate', nativeAmount?.toString()] as const;
}
export function useUsdEstimate(nativeAmount: string) {
    console.log("nativeAmount",nativeAmount);
  const { data, isLoading, error, isError } = useQuery({
    queryKey: usdEstimateKey(nativeAmount),
    queryFn: async () => {
      const amount = parseEther(nativeAmount || "0"); // Always send as BigInt
      console.log("amount",amount)
      const estimate = await readContract(serverConfig, {
        address: FUND_ME_CONTRACT_ADDRESS,
        abi: fundMeABI,
        functionName: 'getUsdEstimate',
        args: [amount],
      });
      // Chainlink feeds typically 8 decimals—convert to readable USD string:
      return estimate ? (Number(estimate) / 1e8).toFixed(2) : '0.00';
    },
    enabled: nativeAmount !== undefined && nativeAmount !== null,
    staleTime: 10_000,
    refetchInterval: 60_000,
    retry: 2,
  });

  return {
    usdEstimate: data || '0.00',
    isLoading,
    isError,
    error: error as Error | null,
  };
}
