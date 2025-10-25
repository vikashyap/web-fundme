import { readContract } from '@wagmi/core';
import {  serverConfig } from '@/lib/wagmi';
import { fundMeABI, FUND_ME_CONTRACT_ADDRESS } from '@/lib/contract';

export async function fetchContractVersion(): Promise<string> {
  try {
    const version = await readContract(serverConfig, {
      address: FUND_ME_CONTRACT_ADDRESS,
      abi: fundMeABI,
      functionName: 'getVersion',
    });

    return version?.toString() || '0';
  } catch (error) {
    console.error('Failed to fetch contract version:', error);
    return '0';
  }
}
