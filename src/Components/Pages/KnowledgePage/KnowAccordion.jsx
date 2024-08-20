/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const containerVariants = {
  close: {
    height: 0,
    opacity: 0,
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const arrowVariants = {
  close: {
    rotate: 0,
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    rotate: 180,
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const KnowAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full sm:p-4 p-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group text-dark-500 sm:text-xl text-[15px]"
            onClick={() => handleToggle(1)}
          >
            <h1>It's Accordion</h1>
            <motion.div
              initial="close"
              animate={activeIndex === 1 ? "open" : "close"}
              variants={arrowVariants}
              className="absolute right-2 pt-1 text-base"
            >
              <IoIosArrowDown />
            </motion.div>
          </button>
        </h6>
        <motion.div
          initial="close"
          animate={activeIndex === 1 ? "open" : "close"}
          variants={containerVariants}
          className="overflow-hidden"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </div>
        </motion.div>
      </div>
      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full sm:p-4 p-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group text-dark-500 sm:text-xl text-[15px]"
            onClick={() => handleToggle(2)}
          >
            <h1>It's Accordion</h1>
            <motion.div
              initial="close"
              animate={activeIndex === 2 ? "open" : "close"}
              variants={arrowVariants}
              className="absolute right-2 pt-1 text-base"
            >
              <IoIosArrowDown />
            </motion.div>
          </button>
        </h6>
        <motion.div
          initial="close"
          animate={activeIndex === 2 ? "open" : "close"}
          variants={containerVariants}
          className="overflow-hidden"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </div>
        </motion.div>
      </div>
      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full sm:p-4 p-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group text-dark-500 sm:text-xl text-[15px]"
            onClick={() => handleToggle(3)}
          >
            <h1>It's Accordion</h1>
            <motion.div
              initial="close"
              animate={activeIndex === 3 ? "open" : "close"}
              variants={arrowVariants}
              className="absolute right-2 pt-1 text-base"
            >
              <IoIosArrowDown />
            </motion.div>
          </button>
        </h6>
        <motion.div
          initial="close"
          animate={activeIndex === 3 ? "open" : "close"}
          variants={containerVariants}
          className="overflow-hidden"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KnowAccordion;
