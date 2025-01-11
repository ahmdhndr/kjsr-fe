import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export default function BrandLogo({
  size = 30,
  className,
  onFooter = false,
}: {
  size?: number;
  className?: string;
  onFooter?: boolean;
}) {
  return (
    <Link
      href={"/"}
      className={cn(
        "mr-4 flex items-center gap-2 font-sans lg:mr-6",
        className
      )}
    >
      <Image
        src={"/logo-bg-transparan.png"}
        alt="Logo brand"
        width={size}
        height={size}
        priority
      />
      {onFooter ? null : (
        <span className="hidden font-bold text-primary lg:inline-block">
          KJSR Indonesia
        </span>
      )}
    </Link>
  );
}
