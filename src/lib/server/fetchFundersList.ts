// lib/server/fetchFundersList.ts
'use server'

import { readContract } from '@wagmi/core';
import { serverConfig } from '@/lib/wagmi';
import { fundMeABI, FUND_ME_CONTRACT_ADDRESS } from '@/lib/contract';
import { createPublicClient, http } from 'viem';
import { sepolia } from 'viem/chains';

export interface Funder {
  address: `0x${string}`;
  amount: bigint;
}

export async function fetchFundersList(): Promise<Funder[]> {
  try {
    // Get the list of funder addresses
    const fundersAddresses = await readContract(serverConfig, {
      address: FUND_ME_CONTRACT_ADDRESS,
      abi: fundMeABI,
      functionName: 'getFunders',
    }) as `0x${string}`[];

    if (!fundersAddresses || fundersAddresses.length === 0) {
      return [];
    }

    // Get unique addresses
    const uniqueAddresses = [...new Set(fundersAddresses)];

    // Create public client for multicall
    const publicClient = createPublicClient({
      chain: sepolia, // Your chain
      transport: http(process.env.NEXT_PUBLIC_RPC_URL),
    });

    // Batch call to get amounts
    const amountContracts = uniqueAddresses.map((address) => ({
      address: FUND_ME_CONTRACT_ADDRESS,
      abi: fundMeABI,
      functionName: 'getAmountFunded' as const,
      args: [address],
    }));

    const amounts = await publicClient.multicall({
      contracts: amountContracts,
    });

    // Combine and filter
    const fundersWithAmounts = uniqueAddresses
      .map((address, index) => ({
        address,
        amount: (amounts[index].result as bigint) || BigInt(0),
      }))
      .filter((funder) => funder.amount > BigInt(0));

    // Sort by amount (highest first)
    return fundersWithAmounts.sort((a, b) => {
      if (b.amount > a.amount) return 1;
      if (b.amount < a.amount) return -1;
      return 0;
    });
  } catch (error) {
    console.error('Error fetching funders list:', error);
    return [];
  }
}
