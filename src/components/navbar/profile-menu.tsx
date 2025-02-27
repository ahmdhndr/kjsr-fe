"use client";

import Link from "next/link";

import { Loader2, LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function ProfileMenu() {
  const { data, status } = useSession();

  if (status === "loading") {
    return <Loader2 className="size-5 animate-spin" />;
  }

  if (!data) {
    return null;
  }

  const avatarFallback = data?.user?.name?.charAt(0).toUpperCase() || "T";

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        asChild
        className="relative cursor-pointer outline-none"
      >
        <Avatar className="size-8 transition hover:opacity-75">
          <AvatarImage
            src={data?.user?.image as string}
            alt={data?.user?.name as string}
          />
          <AvatarFallback className="bg-primary text-background">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="bottom" className="w-60">
        <DropdownMenuItem className="truncate">
          Signed as <span className="font-semibold">{data?.user?.name}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer transition-colors hover:bg-primary hover:text-background">
          <Link href={"/dashboard"} className="w-full">
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => signOut({ callbackUrl: "/" })}
          className="cursor-pointer"
        >
          <LogOut className="mr-2 size-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
