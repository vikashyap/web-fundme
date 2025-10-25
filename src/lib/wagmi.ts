import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { createConfig, http } from 'wagmi';
import { sepolia, arbitrum , mantleSepoliaTestnet} from 'wagmi/chains';





// Simple config for server-side reads only
export const serverConfig = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(`https://eth-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`),
  
  },
  ssr: true,
});

