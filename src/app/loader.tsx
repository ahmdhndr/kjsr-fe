"use client";

import { useEffect, useState } from "react";

import BrandLogo from "@/components/brand-logo";
import HeartAnimation from "@/components/heart-animation";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Loader() {
  const [mounted, setMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 z-[60] h-screen w-screen bg-background">
      <div className="flex h-full w-full items-center justify-center">
        <BrandLogo size={isDesktop ? 120 : 40} onFooter />
        <HeartAnimation
          width={isDesktop ? 250 : 150}
          height={isDesktop ? 100 : 50}
        />
      </div>
    </div>
  );
}
