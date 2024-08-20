import { motion } from "framer-motion";
import MakeEarnCard from "../HomePage/MakeEarnCard";

const ProductPlans = () => {
  return (
    <div className="lg:-mt-10 mt-10">
      <div className="flex flex-col items-center text-center justify-center overflow-hidden">
        <motion.span
          initial={{ y: "70%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
        >
          {" "}
          <h1 className="sm:text-5xl text-3xl">Product Plans</h1>
        </motion.span>
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "8%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
          className="sm:border-2 border-[1.5px] border-[#18dae4] w-0 sm:mb-2 mt-1 rounded-md"
        ></motion.span>
        <motion.p
          initial={{ y: "70%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
          className="sm:text-2xl font-semibold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eveniet?
        </motion.p>
      </div>
      <MakeEarnCard />
    </div>
  );
};

export default ProductPlans;
