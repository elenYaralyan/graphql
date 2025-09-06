"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/trailers", label: "Trailers" },
  ];

  return (
    <header className="sticky top-0 w-full pt-6 px-6 flex items-center justify-between z-50 backdrop-blur-md bg-black/40">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={140} height={36} />
      </Link>

      <nav className="hidden md:flex space-x-11">
        {links.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <div key={label} className="flex flex-col items-center">
              <Link
                href={href}
                className={cn(
                  "font-nunito text-lg font-medium h-fit p-0 no-underline hover:no-underline text-white/65",
                  isActive && "text-white"
                )}
              >
                {label}
              </Link>
              {isActive && (
                <span className="w-2 h-2 mt-1 rounded-full bg-white"></span>
              )}
            </div>
          );
        })}
      </nav>

      <Button
        variant="secondary"
        className="hidden md:inline-flex rounded-full p-0.5 bg-gradient-to-tr h-fit from-neutral-900 via-zinc-900 to-neutral-600"
      >
        <span className="w-full bg-transparent rounded-full px-6 py-2 text-white">
          Search
        </span>
      </Button>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-black/70 text-white border-none"
          >
            <div className="flex px-4 flex-col space-y-6 mt-10">
              {links.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <SheetClose asChild key={label}>
                    <Link
                      href={href}
                      className={cn(
                        "w-full text-left text-2xl font-medium text-white/70 hover:text-white",
                        isActive && "text-white"
                      )}
                    >
                      {label}
                    </Link>
                  </SheetClose>
                );
              })}
              <SheetClose asChild>
                <Button
                  variant="secondary"
                  className="rounded-full px-6 py-2 bg-gradient-to-tr from-neutral-900 via-zinc-900 to-neutral-600 text-white"
                >
                  Search
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
