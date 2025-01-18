"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { menus } from "@/data/menus";
import { cn } from "@/lib/utils";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false); // Close the sheet when a link is clicked
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="lg:hidden">
        <Menu className="text-primary" />
      </SheetTrigger>
      <SheetContent>
        <VisuallyHidden.Root>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </VisuallyHidden.Root>
        {menus.map((item) => (
          <div className="flex flex-col p-2" key={item.name}>
            <Link href={item.href} passHref legacyBehavior>
              <a
                onClick={handleLinkClick}
                href={item.href}
                className={cn(
                  "font-medium transition-colors hover:text-foreground",
                  item.href === pathname
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </a>
            </Link>
          </div>
        ))}
      </SheetContent>
    </Sheet>
  );
}
