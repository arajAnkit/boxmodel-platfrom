import { gsap } from "gsap";
import { useEffect } from "react";

export const BackgroundElements = () => {
  useEffect(() => {
    gsap.to(".sparkle", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.3,
    });

    gsap.to(".rotate-element", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="sparkle absolute top-20 left-20 w-4 h-4 bg-fuchsia-400 rounded-full opacity-60"></div>
      <div className="sparkle absolute top-40 right-32 w-3 h-3 bg-teal-400 rounded-full opacity-40"></div>
      <div className="sparkle absolute bottom-32 left-40 w-5 h-5 bg-amber-400 rounded-full opacity-50"></div>
      <div className="rotate-element absolute top-32 right-20 w-16 h-16 border-2 border-teal-300 rounded-lg opacity-20"></div>
    </div>
  );
};
