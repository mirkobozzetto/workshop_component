import { cva } from "class-variance-authority";

type ButtonProps = {
  children: React.ReactNode;
  classname?: string;
};

export const buttonVariants = cva("");

const Button = ({ children, classname, ...props }: ButtonProps) => {
  return <button className={buttonVariants()}>{children}</button>;
};
export default Button;
