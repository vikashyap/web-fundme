import { getBalance } from '@wagmi/core';
import {  serverConfig } from '@/lib/wagmi';
import {  FUND_ME_CONTRACT_ADDRESS } from '@/lib/contract';

export async function fetchContractBalance(): Promise<string> {
  try {
    const contractBalance = await  getBalance(serverConfig, {
              address: FUND_ME_CONTRACT_ADDRESS,
            })

            console.log("contractBalance",contractBalance);

    return contractBalance.decimals === 0 ? '0' : contractBalance.formatted;
  } catch (error) {
    console.error('Failed to fetch contract version:', error);
    return '0';
  }
}
