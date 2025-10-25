import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Send,
  Users,
  DollarSign,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import { WalletConnect } from "@/components/wallet-connect";

import { FUND_ME_CONTRACT_ADDRESS } from "@/lib/contract";

import { ContractBalance } from "./contract-balance";
import { ContractVersion } from "./contract-version";

import { FundersList } from "./funders-list";
import { TotalFunders } from "./total-funders";

import { Skeleton } from "./ui/skeleton";
import { HeaderLogo } from "./header-logo";
import { SupportJourney } from "./support-journey";
import { FundForm } from "./fund-form";
import { Suspense } from "react";

export function FundInterface() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <HeaderLogo />

          {/* Wallet Info */}
          <div id="wallet-connect" className="flex items-center gap-3">
            <WalletConnect />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Main Hero Card */}
        <SupportJourney />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Contract Balance */}
          <Card className="bg-white shadow-sm border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Contract Balance
                  </p>
                  <Suspense
                    fallback={<p className="text-2xl">Loading balance...</p>}
                  >
                    <ContractBalance />
                  </Suspense>
                  {false && (
                    <p className="text-xs text-blue-500 animate-pulse">
                      Updating balance...
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chainlink Version */}
          <Card className="bg-white shadow-sm border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Chainlink Version
                  </p>
                  {false ? (
                    <Skeleton className="h-12 w-12 rounded-full bg-blue-200 " />
                  ) : (
                    <ContractVersion />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Total Funders */}
          <Card className="bg-white shadow-sm border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Total Funders
                  </p>
                  <TotalFunders />
                  {false && (
                    <p className="text-xs text-blue-500 animate-pulse">
                      Updating funders...
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contract on Etherscan */}
          <Card className="bg-white shadow-sm border-0 cursor-pointer hover:shadow-md transition-shadow">
            <a
              href={`https://sepolia.etherscan.io/address/${FUND_ME_CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <ExternalLink className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500">
                      Contract on Etherscan
                    </p>
                    <p className="text-sm font-mono text-gray-900">
                      {FUND_ME_CONTRACT_ADDRESS.slice(0, 6)}...
                      {FUND_ME_CONTRACT_ADDRESS.slice(-3)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </a>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Fund Interface */}
          <Card className="bg-white shadow-sm border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Send className="h-5 w-5 text-blue-600" />
                Send Funds
              </CardTitle>
              <CardDescription className="text-gray-600">
                Contribute ETH to the FundMe contract
              </CardDescription>
            </CardHeader>
            <FundForm />
          </Card>

          {/* Recent Contributors */}
          <Card className="bg-white shadow-sm border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Users className="h-5 w-5 text-green-600" />
                Recent Contributors
              </CardTitle>
              <CardDescription className="text-gray-600">
                Latest contributions to the FundMe contract
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FundersList maxDisplay={5} showViewAll={true} />
            </CardContent>
          </Card>
        </div>
      </div>
      ;
    </div>
  );
}
