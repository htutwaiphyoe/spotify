import { INavItem } from "@/interfaces/index";

export function NavList(): JSX.Element {
  const navItems: INavItem[] = [
    { href: "#features", text: "Features" },
    { href: "#download", text: "Download" },
    { href: "#contact", text: "Contact" },
  ];

  const getNavItems = (): JSX.Element[] =>
    navItems.map(
      (item: INavItem, i): JSX.Element => (
        <li key={i}>
          <a href={item.href}>{item.text}</a>
        </li>
      )
    );

  return <>{getNavItems()}</>;
}
