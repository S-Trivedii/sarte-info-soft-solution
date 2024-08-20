/* eslint-disable react/prop-types */
import { useId } from "react";
import { TiLocationArrowOutline } from "react-icons/ti";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

export default function MakeEarnCard() {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <h1 className="text-3xl font-bold relative z-20 mb-4">
              {feature.icon}
            </h1>
            <h1 className="text-2xl uppercase font-semibold relative mb-4 z-20">
              {feature.title}
            </h1>
            <h2 className="text-xl uppercase font-semibold relative mb-8 z-20">
              {feature.price}
            </h2>
            <button className="bg-[#18dae4] text-black font-medium py-2 px-4 rounded transition-all hover:bg-[#0b9198] hover:text-white active:scale-95">
              Buy Now
            </button>
            <p className="text-neutral-400 mt-8 gap-5 flex flex-col text-base font-normal relative z-20">
              <span>{feature.desc1}</span>
              <span>{feature.desc2}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    icon: <TiLocationArrowOutline />,
    title: "Primary plan",
    price: "₹ 2,000 - 59,999",
    desc1: "🗸Monthly Return 3.16%",
    desc2: "🗸Annual  Return 38%",
  },
  {
    icon: <IoPaperPlaneOutline />,
    title: "Intermediate Plan",
    price: "₹ 60,000 - 2,99,999",
    desc1: "🗸Monthly Return  3.5%",
    desc2: "🗸Annual  Return 42%",
  },
  {
    icon: <HiOutlineRocketLaunch />,
    title: "Advance Plan",
    price: "₹ 3,00,000 - 10,00,000",
    desc1: "🗸Monthly Return  3.83%",
    desc2: "🗸Annual  Return 46%",
  },
];

export const Grid = ({ pattern, size }) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-900/30 to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay fill-white/10 stroke-white/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
