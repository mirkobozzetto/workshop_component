import { cva } from "class-variance-authority";

export const buttonVariants = cva({
  primary: {
    backgroundColor: "blue",
    color: "white",
  },
  secondary: {
    backgroundColor: "white",
    color: "black",
  },
  tertiary: {
    backgroundColor: "transparent",
    color: "blue",
  },
});

const Button = () => {
  return (
//
  );
};
export default Button;
