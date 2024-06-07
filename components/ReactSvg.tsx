export const ReactSvg = ({ size }: { size: number }, ...props: unknown[]) => {
  return (
    <svg
      viewBox="-10.5 -9.45 21 18.9"
      xmlns="http://www.w3.org/2000/svg"
      className="flex text-sm origin-center transition-all ease-in-out me-0"
      style={{
        color: "#149ECA",
        width: size,
        height: size,
        fill: "currentColor" as string, // Add the fill property with a string value
      }}
      {...props}
    >
      <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  );
};
