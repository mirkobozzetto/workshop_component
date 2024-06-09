import { cva } from "class-variance-authority";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const buttonVariants = cva(
  "items-center inline-flex justify-center rounded-md px-3 py-1.5 focus:outline-none focus:ring-indigo-500 ring-offset-2 focus:ring",
  {
    variants: {
      variant: {
        default: "bg-green-950 text-gray-50 shadow hover:bg-gray-800",
        ghost: "bg-transparent text-gray-950 hobver:bg-gray-200",
      },
    },
  }
);

const Button = ({ children, className, ...props }: ButtonProps) => {
  return <button className={buttonVariants({ className })}>{children}</button>;
};
export default Button;
