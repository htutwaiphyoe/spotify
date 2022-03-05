import React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  classes: string;
}

export function Button({ text, classes, type }: IButtonProps): JSX.Element {
  return (
    <button type={type} className={`px-7 py-3 rounded-md ${classes}`}>
      {text}
    </button>
  );
}
