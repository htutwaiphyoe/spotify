"use client";
import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/utils/helpers";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "../Button";

type HeaderProps = PropsWithChildren & {
  className?: string;
};

function Header({ className, children }: HeaderProps) {
  const router = useRouter();

  return (
    <header
      className={cn("h-fit bg-gradient-to-b from-emerald-800 p-6", className)}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <Button variant="icon" color="black" onClick={router.back}>
            <RxCaretLeft size={35} className="text-white" />
          </Button>
          <Button variant="icon" color="black" onClick={router.forward}>
            <RxCaretRight size={35} className="text-white" />
          </Button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <Button variant="icon" color="white" size="icon">
            <HiHome className="text-black" size={20} />
          </Button>
          <Button variant="icon" color="white" size="icon">
            <BiSearch className="text-black" size={20} />
          </Button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <div>
            <Button variant="fill" color="primary" size="md">
              Sign Up
            </Button>
          </div>
          <div>
            <Button variant="fill" color="white" size="md">
              Sign In
            </Button>
          </div>
        </div>
      </div>
      {children}
    </header>
  );
}

export default Header;
