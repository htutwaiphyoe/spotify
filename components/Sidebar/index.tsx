"use client";
import { PropsWithChildren, useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "../Box";
import SidebarItem from "./SidebarItem";
import Library from "../Library";

type SidebarProps = PropsWithChildren & {};

function Sidebar({ children }: SidebarProps) {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname !== "/search",
        href: "/",
        Icon: HiHome,
      },
      {
        label: "Search",
        active: pathname === "/search",
        href: "/search",
        Icon: BiSearch,
      },
    ],
    [pathname]
  );

  return (
    <main className="flex h-full">
      <aside className="hidden md:flex flex-col gap-y-2 bg-black h-full p-2 w-300">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((route) => (
              <SidebarItem key={route.label} {...route} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </aside>
      <section className="h-full flex-1 overflow-y-auto py-2">
        {children}
      </section>
    </main>
  );
}

export default Sidebar;
