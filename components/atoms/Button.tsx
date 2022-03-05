import React from "react";
import { btnClasses } from "@/enums/index";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  classes: btnClasses;
}

export function Button({ text, classes, type }: IButtonProps): JSX.Element {
  return (
    <button type={type} className={`btn ${classes}`}>
      {text}
    </button>
  );
}
