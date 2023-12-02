import { cn } from "@/utils/helpers";
import { PropsWithChildren } from "react";

type BoxProps = PropsWithChildren & { className?: string };

function Box({ children, className }: BoxProps) {
  return (
    <div className={cn(`bg-neutral-900 rounded-lg h-fit w-full`, className)}>
      {children}
    </div>
  );
}

export default Box;
