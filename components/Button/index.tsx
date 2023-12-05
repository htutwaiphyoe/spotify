type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string;
};

function Button({}: ButtonProps) {
  return <div>Button</div>;
}

export default Button;
