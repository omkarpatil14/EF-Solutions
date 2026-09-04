interface WaveDividerProps {
  className?: string;
  fill?: string;
  flip?: boolean;
}

export default function WaveDivider({
  className = "",
  fill = "#E7F1EE",
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      className={`pointer-events-none leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-[56px] w-full sm:h-[72px] md:h-[88px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0 58C180 90 360 14 540 34C720 54 900 94 1080 70C1260 46 1350 22 1440 38V96H0V58Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
