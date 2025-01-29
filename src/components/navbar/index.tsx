"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useSession } from "next-auth/react";

import BrandLogo from "@/components/brand-logo";
import { menus } from "@/data/menus";
import { cn } from "@/lib/utils";

import AuthModal from "../auth-modal";
import { Button } from "../ui/button";
import NavbarMobile from "./navbar-mobile";
import { ProfileMenu } from "./profile-menu";

export function Navbar() {
  const pathname = usePathname();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  // const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const session = useSession();

  if (!session) return null;

  const onClickLogin = () => {
    setOpenAuthModal(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container-wrapper">
          <div className="container flex h-14 items-center gap-2">
            <NavbarMobile />
            <div className="mr-4 hidden lg:flex">
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
            <div className="flex flex-1 items-center justify-between gap-2 lg:justify-end">
              <div className="block lg:hidden">
                <BrandLogo />
              </div>
              <nav className="flex items-center gap-2">
                {session.status === "authenticated" && <ProfileMenu />}
                {session.status === "unauthenticated" && (
                  <Button
                    variant={"ghost"}
                    className="text-primary transition-colors hover:bg-primary hover:text-background"
                    onClick={onClickLogin}
                  >
                    Masuk
                  </Button>
                )}
              </nav>
            </div>
          </div>
        </div>
      </header>

      <AuthModal
        open={openAuthModal}
        onOpenChange={() => setOpenAuthModal(false)}
      />
    </>
  );
}
