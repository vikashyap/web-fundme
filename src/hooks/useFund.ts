// hooks/useFund.ts
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { useQueryClient } from '@tanstack/react-query';
import { parseEther } from 'viem';
import { fundMeABI, FUND_ME_CONTRACT_ADDRESS } from '@/lib/contract';

import { useEffect } from 'react';
import { updateContractBalance } from '@/app/actions/update-contract-balance';
import { updateFunderList } from '@/app/actions/update-funder-list';

export function useFund() {
  const queryClient = useQueryClient();
  
  const { 
    data: hash, 
    writeContract, 
    isPending,
    error: writeError 
  } = useWriteContract();

  const { 
    isLoading: isConfirming, 
    isSuccess,
    error: confirmError 
  } = useWaitForTransactionReceipt({
    hash,
  });

  // Invalidate query when transaction succeeds
  useEffect(() => {
    if (isSuccess) {
      console.log('✅ Transaction successful, refetching contract data...'); 
      updateContractBalance();
      updateFunderList();
    }
  }, [isSuccess, queryClient]);

  const fund = (amount: string) => {
    writeContract({
      address: FUND_ME_CONTRACT_ADDRESS,
      abi: fundMeABI,
      functionName: 'fund',
      value: parseEther(amount),
    });
  };

  return {
    fund,
    hash,
    isPending,
    isConfirming,
    isSuccess,
    error: writeError || confirmError,
  };
}

