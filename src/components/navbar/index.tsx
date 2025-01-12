"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import BrandLogo from "@/components/brand-logo";
import { menus } from "@/data/menus";
import { cn } from "@/lib/utils";

import NavbarMobile from "./navbar-mobile";

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container-wrapper">
          <div className="container flex h-14 items-center gap-2">
            <NavbarMobile />
            <div className="mr-4 hidden md:flex">
              <BrandLogo />

              <nav className="flex items-center gap-4 text-sm xl:gap-6">
                {menus.map((item) => (
                  <Link
                    href={item.href}
                    key={item.name}
                    passHref
                    legacyBehavior
                  >
                    <a
                      href={item.href}
                      className={cn(
                        "font-medium text-primary/90 transition-colors hover:text-primary",
                        item.href === pathname
                          ? "font-semibold text-primary"
                          : "text-primary/80"
                      )}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
              <div className="block md:hidden">
                <BrandLogo />
              </div>
              {/* <nav className="flex items-center gap-2">
                <Button
                  variant={"ghost"}
                  className="text-muted-foreground"
                  onClick={onClickLogin}
                >
                  Sign In
                </Button>
              </nav> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
