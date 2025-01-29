import React from "react";

// import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useMedia } from "react-use";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";

interface ResponsiveAuthProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export default function ResponsiveAuth({
  open,
  onOpenChange,
  children,
}: ResponsiveAuthProps) {
  const isDesktop = useMedia("(min-width: 1024px)", true);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          {/* <VisuallyHidden.Root> */}
          <DialogHeader className="text-primary">
            <DialogTitle>Masuk dengan Akun Google</DialogTitle>
            <DialogDescription>
              Selamat datang di Web KJSR Indonesia
            </DialogDescription>
          </DialogHeader>
          {/* </VisuallyHidden.Root> */}
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        {/* <VisuallyHidden.Root> */}
        <DrawerHeader className="text-primary">
          <DrawerTitle>Masuk dengan Akun Google</DrawerTitle>
          <DrawerDescription>
            Selamat datang di Web KJSR Indonesia
          </DrawerDescription>
        </DrawerHeader>
        {/* </VisuallyHidden.Root> */}
        <div className="p-4">{children}</div>
      </DrawerContent>
    </Drawer>
  );
}
