import { useFundMeStore } from "@/stores/fundMeStore";
import { Code2 } from "lucide-react";

export function HeaderLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
        <Code2 className="h-6 w-6 text-blue-600" />
      </div>
      <div>
        <h1 className="text-xl font-semibold text-gray-900">FundMe</h1>
        <p className="text-sm text-gray-500">Web3 Learning Journey</p>
      </div>
    </div>
  );
}
