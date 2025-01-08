import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export default function BrandLogo({ className }: { className?: string }) {
  return (
    <Link
      href={"/"}
      className={cn("mr-4 flex items-center gap-2 lg:mr-6", className)}
    >
      <Image src={"/logo.png"} alt="Logo brand" width={24} height={24} />
      <span className="hidden font-bold text-background lg:inline-block">
        KJSR Indonesia
      </span>
    </Link>
  );
}
