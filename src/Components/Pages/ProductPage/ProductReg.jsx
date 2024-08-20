import { motion } from "framer-motion";

const ProductReg = () => {
  return (
    <div className="mt-[5em]">
      <div className="flex flex-col items-center text-center justify-center overflow-hidden">
        <motion.span
          initial={{ y: "70%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
        >
          {" "}
          <h1 className="sm:text-5xl text-3xl">
            Get Smart The Best Investment Plan in Sarte Info Soft & Solutions
          </h1>
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
          className="sm:text-2xl font-semibold mt-5"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          provident quisquam consectetur ducimus libero magni, mollitia quo
          nulla voluptatem explicabo, nostrum magnam consequatur temporibus
          aperiam error optio cumque? Nam, quo?
        </motion.p>
        <button className="bg-[#18dae4] text-black font-medium py-2 px-4 rounded transition-all hover:bg-[#0b9198] hover:text-white active:scale-95 mt-10">
          Registration
        </button>
      </div>
    </div>
  );
}

export default ProductReg
