import { Loader2 } from "lucide-react"; // Use any loader/spinner icon. Or import from your icon set.
import { cn } from "@/lib/utils"; // If using className join util, or remove if not

function AnimatedDots() {
  return (
    <span className="inline-flex w-5">
      <span className="animate-bounce">.</span>
      <span className="animate-bounce" style={{animationDelay: ".15s"}}>.</span>
      <span className="animate-bounce" style={{animationDelay: ".3s"}}>.</span>
    </span>
  );
}
  
  
  export function TransactionFinalizing() {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm pointer-events-none">
      <div className="mx-auto flex flex-col items-center justify-center py-3">
        <span className="text-sm font-medium text-blue-600 drop-shadow">
          Transactions finalising the block
          <span className="inline-block ml-1 animate-pulse">...</span>
        </span>
      </div>
      
      {/* Animated bottom border using arbitrary values */}
      <div className="h-3 w-full bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 animate-[shimmer_2s_linear_infinite] bg-[length:200%_100%]" 
           style={{
             backgroundImage: 'linear-gradient(90deg, #60a5fa 25%, #93c5fd 50%, #60a5fa 75%)',
             animation: 'shimmer 2s linear infinite'
           }} />
      
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
    );
  }
  