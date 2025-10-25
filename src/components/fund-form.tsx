"use client";
import { Label } from "@radix-ui/react-label";
import { Alert, AlertDescription } from "./ui/alert";
import { CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { EstimatedUSD } from "./estimated-usd";
import { useAccount } from "wagmi";
import { useState } from "react";
import { useFund } from "@/hooks/useFund";
import { usdEstimateKey } from "@/hooks/useUsdEstimate";
import { TransactionFinalizing } from "./transaction-finalizing";

export function FundForm() {
  const [fundAmount, setFundAmount] = useState("0.1");
  const { isConnected } = useAccount();
  const { fund, isConfirming, isPending } = useFund();

  const isUpdatingBalance = isConfirming || isPending;
  const handleFund = async () => {
    if (!fundAmount || isConnected) {
      fund(fundAmount);
    }
    // TODO: Implement funding logic
    console.log("Funding with amount:", fundAmount);
  };
  return (
    <CardContent className="space-y-6">
      {!isConnected && (
        <Alert className="border-orange-200 bg-orange-50">
          <AlertDescription className="text-orange-800">
            🔗 Please connect your wallet to interact with the contract.
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="amount" className="text-gray-700">
          Amount (ETH)
        </Label>
        <Input
          id="amount"
          type="number"
          placeholder="0.1"
          value={fundAmount}
          onChange={(e) => setFundAmount(e.target.value)}
          className="text-lg"
          min="0"
          step="0.001"
        />
        <p className="text-sm text-gray-500">
          Enter any amount of ETH you'd like to contribute
        </p>
      </div>

      <Button
        onClick={handleFund}
        disabled={
          !fundAmount ||
          parseFloat(fundAmount) <= 0 ||
          !isConnected ||
          isUpdatingBalance
        }
        className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700"
        size="lg"
      >
        <Send className="h-4 w-4 mr-2" />
        Send {fundAmount || "0"} ETH
      </Button>

      <EstimatedUSD fundAmount={fundAmount} />
      {isUpdatingBalance && <TransactionFinalizing />}
    </CardContent>
  );
}
