import { PropsWithChildren } from "react";

type SidebarProps = PropsWithChildren & {};

function Sidebar({ children }: SidebarProps) {
  return <div>{children}</div>;
}

export default Sidebar;
