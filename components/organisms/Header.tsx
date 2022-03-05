import Image from "next/image";
import { Button } from "@/components/atoms/Button";

interface INavItem {
  href: string;
  text: string;
}

export function Header(): JSX.Element {
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

  return (
    <header>
      <nav className="container flex items-center py-8">
        <Image
          src="/imgs/logo-bookmark.svg"
          alt="Bookmark logo"
          width="148"
          height="25"
        />
        <ul className="items-center justify-end flex-1 hidden gap-12 text-xs uppercase sm:flex text-bookmark-blue">
          {getNavItems()}
          <Button
            text="Login"
            type="button"
            classes="text-white uppercase bg-bookmark-red"
          />
        </ul>
        <div className="flex justify-end flex-1 sm:hidden">
          <i className="text-2xl cursor-pointer fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
}
