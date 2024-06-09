import { cva } from "class-variance-authority";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "default" | "ghost";
  className?: string;
};

export const buttonVariants = cva(
  "items-center inline-flex justify-center rounded-md px-3 py-1.5 transition-colors focus:outline-none focus:ring-indigo-500 ring-offset-2 focus:ring",
  {
    variants: {
      variant: {
        default: "bg-green-950 text-gray-50 shadow hover:bg-gray-800",
        ghost:
          "bg-transparent text-gray-950 hover:bg-gray-200 active:bg-gray-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Button = ({ children, variant, className, ...props }: ButtonProps) => {
  return (
    <button className={buttonVariants({ className, variant })}>
      {children}
    </button>
  );
};
export default Button;
