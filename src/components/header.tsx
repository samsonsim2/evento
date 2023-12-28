"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All events",
    path: "/events/all",
  },
];
const Header = () => {
  const activePathname = usePathname();

  return (
    <header className=" flex justify-between items-center h-14 p-3 sm:p-9 border-b border-white">
      <Logo />

      <nav className="h-14">
        <ul className="flex gap-x-6 h-full text-sm">
          {routes.map((route) => {
            return (
              <li
                key={route.path}
                className={cn(
                  " h-full hover:text-white flex items-center relative transition",
                  {
                    "text-white": activePathname == route.path,
                    "text-white/50": activePathname !== route.path,
                  }
                )}
              >
                <Link href={route.path}>{route.name}</Link>
                {activePathname == route.path && (
                  <motion.div
                    layoutId="active-link"
                    className="bg-accent h-1 w-full absolute bottom-0"
                  ></motion.div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
