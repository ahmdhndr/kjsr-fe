"use client";

import { useEffect, useState } from "react";

import * as motion from "motion/react-client";

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

  const loaderVariants = {
    initial: {
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 0.5 },
      },
    },
    slideIn: {
      y: [0, "-100vh"],
      opacity: 0,
      transition: {
        y: { duration: 0.5, delay: 1 },
        opacity: { delay: 1 },
      },
    },
    // disappear: {
    //   opacity: 0,
    //   // y: "-100vh",
    //   transition: {
    //     opacity: { duration: 0.5 },
    //     // y: { duration: 1, delay: 0.5 },
    //   },
    // },
  };

  return (
    <motion.div
      initial="initial"
      animate="slideIn"
      // exit="disappear"
      variants={loaderVariants}
      className="absolute bottom-0 left-0 right-0 top-0 z-[60] h-screen w-screen bg-background"
    >
      <div className="flex h-full w-full items-center justify-center">
        <BrandLogo size={isDesktop ? 120 : 40} onFooter />
        <HeartAnimation
          width={isDesktop ? 250 : 150}
          height={isDesktop ? 100 : 50}
        />
      </div>
    </motion.div>
  );
}
