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

function Header({ className }: HeaderProps) {
  const router = useRouter();
  return (
    <header
      className={cn("h-fit bg-gradient-to-b from-emerald-800 p-6", className)}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
            onClick={router.back}
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
            onClick={router.forward}
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full bg-white flex items-center justify-center hover:opacity-75 transition p-2">
            <HiHome className="text-black" size={20} />
          </button>
          <button className="rounded-full bg-white flex items-center justify-center hover:opacity-75 transition p-2">
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <div>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
