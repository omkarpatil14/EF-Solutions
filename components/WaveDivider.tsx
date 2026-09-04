interface WaveDividerProps {
  className?: string;
  fill?: string;
  flip?: boolean;
}

export default function WaveDivider({
  className = "",
  fill = "#F5F8FA",
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      className={`pointer-events-none leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 40C240 80 480 0 720 24C960 48 1200 80 1440 40V80H0V40Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
