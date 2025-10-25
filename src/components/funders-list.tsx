import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { formatEther } from "viem";
import { fetchFundersList } from "@/lib/server/fetchFundersList";
import { cacheTag } from "next/cache";

interface FundersListProps {
  maxDisplay?: number;
  showViewAll?: boolean;
}

export async function FundersList({
  maxDisplay = 5,
  showViewAll = true,
}: FundersListProps) {
  "use cache";
  const fundersList = await fetchFundersList();
  cacheTag("funders-list");

  if (!fundersList || fundersList.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <Users className="h-12 w-12 mx-auto mb-3 text-gray-300" />
        <p>No contributors yet</p>
        <p className="text-sm">Be the first to contribute!</p>
      </div>
    );
  }

  const displayedFunders = fundersList.slice(0, maxDisplay);
  const hasMore = fundersList.length > maxDisplay;

  return (
    <>
      <div className="space-y-4">
        {displayedFunders.map((funder, index) => (
          <div key={funder.address}>
            <div className="flex items-center justify-between p-3 rounded-lg bg-green-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-green-700">
                    {funder.address.slice(2, 4).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-mono text-sm text-gray-900">
                    {funder.address.slice(0, 6)}...{funder.address.slice(-4)}
                  </p>
                  <p className="text-xs text-gray-500">Recently funded</p>
                </div>
              </div>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800"
              >
                {formatEther(funder.amount)} ETH
              </Badge>
            </div>
            {index < displayedFunders.length - 1 && (
              <Separator className="my-2" />
            )}
          </div>
        ))}
      </div>

      {showViewAll && hasMore && (
        <div className="mt-4 pt-4 border-t">
          <Button variant="outline" className="w-full">
            View All {fundersList.length} Contributors
          </Button>
        </div>
      )}
    </>
  );
}
