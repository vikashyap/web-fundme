// hooks/useWalletSync.ts
'use client';

import { useEffect } from 'react';
import { watchAccount, watchChainId } from '@wagmi/core';
import { serverConfig } from '@/lib/wagmi';
import { revalidatePageData } from '@/app/actions//revalidate-page-data';

export function useWalletSync() {
  useEffect(() => {
    // Watch for account changes
    const unwatchAccount = watchAccount(serverConfig, {
      onChange(account, prevAccount) {
        if (prevAccount.address && account.address !== prevAccount.address) {
          console.log('🔄 Account changed:', prevAccount.address, '→', account.address);
          revalidatePageData();
        }
      },
    });

    // Watch for chain changes
    const unwatchChain = watchChainId(serverConfig, {
      onChange(chainId, prevChainId) {
        if (prevChainId && chainId !== prevChainId) {
          console.log('🔄 Chain changed:', prevChainId, '→', chainId);
          revalidatePageData();
        }
      },
    });

    // Cleanup watchers on unmount
    return () => {
      unwatchAccount();
      unwatchChain();
    };
  }, []);
}

 
 
