interface INavItem {
  href: string;
  text: string;
}

export function NavList(): JSX.Element {
  const navItems: INavItem[] = [
    { href: "#features", text: "Features" },
    { href: "#pricing", text: "Pricing" },
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
