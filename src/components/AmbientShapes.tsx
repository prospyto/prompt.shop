const SHAPES = [
  { type: "circle", x: 90, y: 90, r: 40, size: 0, rotate: 0, dur: 9, delay: 0, color: "var(--indigo)" },
  { type: "square", x: 980, y: 140, r: 0, size: 70, rotate: 12, dur: 10, delay: 1.2, color: "var(--violet)" },
  { type: "triangle", x: 1080, y: 480, r: 0, size: 80, rotate: -8, dur: 8.5, delay: 2.4, color: "var(--indigo)" },
  { type: "circle", x: 1000, y: 620, r: 30, size: 0, rotate: 0, dur: 11, delay: 0.6, color: "var(--violet)" },
  { type: "square", x: 60, y: 500, r: 0, size: 55, rotate: -15, dur: 9.5, delay: 3, color: "var(--indigo)" },
  { type: "triangle", x: 200, y: 640, r: 0, size: 60, rotate: 20, dur: 10.5, delay: 1.8, color: "var(--violet)" },
];

function ShapePath({ shape }: { shape: (typeof SHAPES)[number] }) {
  const style = {
    animationDuration: `${shape.dur}s`,
    animationDelay: `${shape.delay}s`,
    stroke: shape.color,
  };

  if (shape.type === "circle") {
    return (
      <circle
        className="ambient-circle"
        cx={shape.x}
        cy={shape.y}
        r={shape.r}
        fill="none"
        strokeWidth={1.5}
        opacity={0}
        style={style}
      />
    );
  }

  if (shape.type === "square") {
    const half = shape.size / 2;
    return (
      <rect
        className="ambient-square"
        x={shape.x - half}
        y={shape.y - half}
        width={shape.size}
        height={shape.size}
        transform={`rotate(${shape.rotate} ${shape.x} ${shape.y})`}
        fill="none"
        strokeWidth={1.5}
        opacity={0}
        style={style}
      />
    );
  }

  const h = (shape.size * Math.sqrt(3)) / 2;
  const points = [
    [shape.x, shape.y - (2 / 3) * h],
    [shape.x - shape.size / 2, shape.y + (1 / 3) * h],
    [shape.x + shape.size / 2, shape.y + (1 / 3) * h],
  ]
    .map((p) => p.join(","))
    .join(" ");

  return (
    <polygon
      className="ambient-triangle"
      points={points}
      transform={`rotate(${shape.rotate} ${shape.x} ${shape.y})`}
      fill="none"
      strokeWidth={1.5}
      opacity={0}
      style={style}
    />
  );
}

export default function AmbientShapes() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {SHAPES.map((shape, i) => (
        <ShapePath key={i} shape={shape} />
      ))}
    </svg>
  );
}
