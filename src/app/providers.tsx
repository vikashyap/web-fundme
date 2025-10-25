"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { serverConfig } from "@/lib/wagmi";

import "@rainbow-me/rainbowkit/styles.css";
import { use } from "react";
import { useWalletSync } from "@/hooks/useWalletSync";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={serverConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <WalletSync>{children}</WalletSync>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

function WalletSync({ children }: { children: React.ReactNode }) {
  useWalletSync();
  return <div>{children}</div>;
}
