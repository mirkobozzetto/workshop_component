import { cva } from "class-variance-authority";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const buttonVariants = cva(
  "items-center inline-flex justify-center rounded-md px-3 py-1.5"
);

const Button = ({ children, className, ...props }: ButtonProps) => {
  return <button className={buttonVariants({ className })}>{children}</button>;
};
export default Button;
