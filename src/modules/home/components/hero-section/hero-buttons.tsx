import Link from "next/link";

import { ArrowRightIcon, BookOpenIcon, Gamepad2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";

export const HeroButtons = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
        <Link href="/theory">
          <Button
            size="lg"
            className="bg-gradient-to-r from-fuchsia-600 to-teal-500 text-white shadow-lg"
          >
            <BookOpenIcon className="w-5 h-5 mr-2" />
            Start Learning
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Button>
        </Link>
        <Link href="/game">
          <Button size="lg" variant="outline">
            <Gamepad2Icon className="w-5 h-5 mr-2" />
            Play Games
          </Button>
        </Link>
      </div>
    </>
  );
};
