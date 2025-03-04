export default function SvgElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large circle */}
      <div className="absolute -top-[30%] -right-[20%] w-[80%] h-[80%] opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="#FFC300"
            strokeWidth="0.5"
            className="animate-rotate-slow"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="#FFC300"
            strokeWidth="0.5"
            className="animate-rotate-slow"
            style={{ animationDirection: "reverse" }}
          />
        </svg>
      </div>

      {/* Abstract lines */}
      <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] opacity-10">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10,50 Q30,20 50,50 T90,50"
            fill="none"
            stroke="#FFC300"
            strokeWidth="0.5"
            className="animate-pulse-gold"
          />
          <path
            d="M10,60 Q30,30 50,60 T90,60"
            fill="none"
            stroke="#FFC300"
            strokeWidth="0.5"
            className="animate-pulse-gold"
            style={{ animationDelay: "1s" }}
          />
          <path
            d="M10,70 Q30,40 50,70 T90,70"
            fill="none"
            stroke="#FFC300"
            strokeWidth="0.5"
            className="animate-pulse-gold"
            style={{ animationDelay: "2s" }}
          />
        </svg>
      </div>

      {/* Dots pattern */}
      <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] opacity-10">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 10 }).map((_, i) =>
            Array.from({ length: 10 }).map((_, j) => (
              <circle
                key={`${i}-${j}`}
                cx={i * 10 + 5}
                cy={j * 10 + 5}
                r="1"
                fill="#FFC300"
                className="animate-pulse-gold"
                style={{ animationDelay: `${(i + j) * 0.1}s` }}
              />
            ))
          )}
        </svg>
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-[20%] left-[20%] w-[20%] h-[20%] opacity-10 animate-float">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="#FFC300"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div
        className="absolute bottom-[30%] left-[10%] w-[15%] h-[15%] opacity-10 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="20"
            y="20"
            width="60"
            height="60"
            fill="none"
            stroke="#FFC300"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </div>
  );
}
