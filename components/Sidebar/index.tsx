"use client";

import { PropsWithChildren, useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";

type SidebarProps = PropsWithChildren & {};

function Sidebar({ children }: SidebarProps) {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname !== "/search",
        href: "/",
        icon: HiHome,
      },
      {
        label: "Search",
        active: pathname === "/search",
        href: "/search",
        icon: BiSearch,
      },
    ],
    [pathname]
  );

  return (
    <aside className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full p-2 w-300">
        <Box className="overflow-y-auto h-full">{children}</Box>
      </div>
    </aside>
  );
}

export default Sidebar;
