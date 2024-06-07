type ReactSvgProps = {
  size: number;
  fill?: string;
};

export const ReactSvg = ({
  size,
  fill = "transparent",
  ...props
}: ReactSvgProps) => {
  return (
    <svg
      viewBox="-10.5 -9.45 21 18.9"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className="flex text-sm origin-center transition-all ease-in-out me-0"
      style={{
        color: "#149ECA",
        width: size,
        height: size,
      }}
      {...props}
    ></svg>
  );
};
