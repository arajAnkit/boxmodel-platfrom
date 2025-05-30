import Link from "next/link";
import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Link href="/theory">
        <Button
          size="lg"
          className="bg-gradient-to-r from-teal-600 to-amber-500 hover:from-teal-700 hover:to-amber-600 text-white"
        >
          Start Learning Now
        </Button>
      </Link>
      <Link href="/game">
        <Button
          size="lg"
          variant="outline"
          className="border-teal-200 hover:bg-teal-50 dark:border-teal-800 dark:hover:bg-teal-950"
        >
          Try Interactive Game
        </Button>
      </Link>
    </div>
  );
};
