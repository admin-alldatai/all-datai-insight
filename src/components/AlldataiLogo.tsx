const AlldataiLogo = ({ className = "h-10" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 1200 300" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Atom symbol */}
      <g transform="translate(50, 150)">
        {/* Outer ellipses */}
        <ellipse 
          cx="0" 
          cy="0" 
          rx="90" 
          ry="40" 
          fill="none" 
          stroke="white" 
          strokeWidth="12"
          transform="rotate(0)"
        />
        <ellipse 
          cx="0" 
          cy="0" 
          rx="90" 
          ry="40" 
          fill="none" 
          stroke="white" 
          strokeWidth="12"
          transform="rotate(60)"
        />
        <ellipse 
          cx="0" 
          cy="0" 
          rx="90" 
          ry="40" 
          fill="none" 
          stroke="white" 
          strokeWidth="12"
          transform="rotate(120)"
        />
        {/* Center circles */}
        <circle cx="0" cy="0" r="15" fill="white" />
        <circle cx="0" cy="-55" r="10" fill="white" />
        <circle cx="48" cy="28" r="10" fill="white" />
        <circle cx="-48" cy="28" r="10" fill="white" />
      </g>
      
      {/* Alldatai text */}
      <text 
        x="220" 
        y="200" 
        fill="white" 
        fontSize="140" 
        fontWeight="700" 
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Alldatai
      </text>
    </svg>
  );
};

export default AlldataiLogo;
