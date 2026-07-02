const SHAPES = [
  { type: "circle", top: "8%", left: "6%", size: 70, dur: 9, delay: 0, color: "var(--indigo)" },
  { type: "square", top: "14%", left: "86%", size: 60, rotate: 12, dur: 10, delay: 1.2, color: "var(--violet)" },
  { type: "triangle", top: "58%", left: "90%", size: 70, rotate: -8, dur: 8.5, delay: 2.4, color: "var(--indigo)" },
  { type: "circle", top: "78%", left: "82%", size: 50, dur: 11, delay: 0.6, color: "var(--violet)" },
  { type: "square", top: "62%", left: "3%", size: 46, rotate: -15, dur: 9.5, delay: 3, color: "var(--indigo)" },
  { type: "triangle", top: "82%", left: "14%", size: 54, rotate: 20, dur: 10.5, delay: 1.8, color: "var(--violet)" },
];

function ShapeSvg({ shape }: { shape: (typeof SHAPES)[number] }) {
  const style = {
    animationDuration: `${shape.dur}s`,
    animationDelay: `${shape.delay}s`,
    stroke: shape.color,
  };

  if (shape.type === "circle") {
    return (
      <svg viewBox="0 0 100 100" width={shape.size} height={shape.size}>
        <circle
          className="ambient-circle"
          cx={50}
          cy={50}
          r={40}
          fill="none"
          strokeWidth={2}
          opacity={0}
          style={style}
        />
      </svg>
    );
  }

  if (shape.type === "square") {
    return (
      <svg viewBox="0 0 100 100" width={shape.size} height={shape.size}>
        <rect
          className="ambient-square"
          x={10}
          y={10}
          width={80}
          height={80}
          transform={`rotate(${shape.rotate ?? 0} 50 50)`}
          fill="none"
          strokeWidth={2}
          opacity={0}
          style={style}
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 100" width={shape.size} height={shape.size}>
      <polygon
        className="ambient-triangle"
        points="50,10 90,85 10,85"
        transform={`rotate(${shape.rotate ?? 0} 50 50)`}
        fill="none"
        strokeWidth={2}
        opacity={0}
        style={style}
      />
    </svg>
  );
}

export default function AmbientShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {SHAPES.map((shape, i) => (
        <div
          key={i}
          className="absolute"
          style={{ top: shape.top, left: shape.left }}
        >
          <ShapeSvg shape={shape} />
        </div>
      ))}
    </div>
  );
}
