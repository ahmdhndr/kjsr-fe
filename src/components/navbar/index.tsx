"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { Menu } from "lucide-react";

import BrandLogo from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { menus } from "@/data/menus";
import { cn } from "@/lib/utils";

import NavbarMobile from "./navbar-mobile";

export function Navbar() {
  const pathname = usePathname();
  const [openMenuMobile, setOpenMenuMobile] = React.useState(false);

  // const onClickLogin = () => {
  //   console.log("login");
  // };

  const onClickMenuMobile = () => {
    setOpenMenuMobile(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
        <div className="container-wrapper bg-primary">
          <div className="container flex h-14 items-center">
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
                        "font-medium transition-colors hover:text-background",
                        item.href === pathname
                          ? "font-semibold text-background"
                          : "text-background/80"
                      )}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
            <Button
              variant={"ghost"}
              className="mr-2 px-0 py-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              onClick={onClickMenuMobile}
            >
              <Menu className="text-background" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
            {/* <BrandLogo className="md:hidden" /> */}
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

      <NavbarMobile
        open={openMenuMobile}
        onOpenChangeAction={() => setOpenMenuMobile(false)}
      />
    </>
  );
}
