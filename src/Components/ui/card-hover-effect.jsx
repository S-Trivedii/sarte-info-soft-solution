/* eslint-disable react/prop-types */
import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid sm:grid-cols-2 grid-cols-1 py-2", className)}>
      {items.map((item, idx) => (
        <Link
          to={item?.link}
          key={item?.idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#2d2d2d] block rounded-xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>
              <img className="rounded-xl" src={item.image} />
            </CardTitle>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "service rounded-xl h-full w-full p-1 overflow-hidden bg-[#100f10] border border-transparent relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-1">{children}</div>
      </div>
    </div>
  );
};

const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "font-bold tracking-wide mt-2 flex px-2",
        className
      )}
    >
      {children}
    </h4>
  );
};

const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-tight leading-relaxed px-2",
        className
      )}
    >
      {children}
    </p>
  );
};

export { HoverEffect, Card, CardTitle, CardDescription };
