import { motion } from "framer-motion";
import Wrapper from "../../Wrapper";
import plans from "../../../assets/product/plans.jpg";
import ProductDesOne from "./ProductDesOne";
import ProductDesTwo from "./ProductDesTwo";
import ProductPlans from "./ProductPlans";
import ProductService from "./ProductService";
import ProductFaq from "./ProductFaq";
import ProductReg from "./ProductReg";
import ProductDesThree from "./ProductDesThree";

const Products = () => {
  return (
    <div className="mb-10">
      <div className="h-[50vh] w-full bg-dot-white/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 sm:flex hidden items-center justify-center bg-[#100f10] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
        <img
          className="h-full w-full object-cover md:px-[6em] px-[2em] md:py-10 py-5"
          src={plans}
          alt=""
        />
      </div>
      <Wrapper>
        <div className="flex flex-col items-center text-center justify-center overflow-hidden">
          <motion.span
            initial={{ y: "70%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
          >
            {" "}
            <h1 className="sm:text-5xl text-3xl">See What Is Best For You ?</h1>
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
            Choose From Different Plans to Grow You Many to Way you Want
          </motion.p>
        </div>
        <ProductDesOne />
        <ProductDesTwo />
        <ProductDesThree />
        <ProductPlans />
        <ProductService />
        <ProductFaq />
        <ProductReg />
      </Wrapper>
    </div>
  );
};

export default Products;
