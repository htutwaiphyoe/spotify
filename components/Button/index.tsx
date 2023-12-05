import { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/helpers";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof cvaClasses> & {
    variant?: string;
    color?: string;
  };

const cvaClasses = cva("", {
  variants: {
    color: {
      black: "bg-black",
      white: "bg-white text-black",
      primary: "bg-green-500 text-black",
    },
    size: {
      md: "px-4 py-2",
      icon: "p-2",
    },
    variant: {
      icon: "rounded-full flex items-center justify-center hover:opacity-75 transition",
      fill: "w-full rounded-full border border-transparent disabled:cursor-not-allowed disabled:opacity-50 font-bold hover:opacity-75 transition",
    },
  },
});

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, disabled, color, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(cvaClasses({ variant, color, size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
