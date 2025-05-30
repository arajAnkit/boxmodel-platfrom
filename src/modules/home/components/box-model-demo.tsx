import { useEffect } from "react";
import { gsap } from "gsap";

export const BoxModelDemo = () => {
  useEffect(() => {
    gsap.fromTo(".box", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <div className="relative w-96 h-96 md:h-[30rem] md:w-[30rem]  mx-auto mt-8 md:mt-16">
      <div className="absolute inset-0 bg-purple-500 flex text-white text-lg font-bold">
        <p className="pl-8">Margin</p>
      </div>
      <div className="absolute inset-8 bg-teal-500 flex text-white text-lg font-bold">
        <p className="pl-8">Border</p>
      </div>
      <div className="absolute inset-16 bg-orange-500 flex text-white text-lg font-bold">
        <p className="pl-8">Padding</p>
      </div>
      <div className="absolute inset-24 bg-blue-900 flex items-center justify-center text-white text-lg font-bold">
        Content
      </div>
    </div>
  );
};
