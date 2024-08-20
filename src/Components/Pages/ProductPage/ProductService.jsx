import { motion } from "framer-motion";
import { Meteors } from "../../ui/meteors";
import Wrapper from "../../Wrapper";

const ProductService = () => {
  return (
    <div className="mt-[2em]">
      <Wrapper>
        <h1 className="flex flex-col items-center text-center justify-center sm:text-5xl text-3xl overflow-hidden">
          <motion.span
            initial={{ y: "70%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
          >
            {" "}
            <h1>Product Services</h1>
          </motion.span>
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "8%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
            className="sm:border-2 border-[1.5px] border-[#18dae4] w-0 sm:mb-5 rounded-md"
          ></motion.span>
        </h1>
      </Wrapper>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-8">
        <div className="w-full relative">
          <div className="service relative shadow-xl px-4 py-4 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl mb-4 relative z-50">
              24/7 Support
            </h1>
            <Meteors number={20} />
          </div>
        </div>
        <div className="w-full relative">
          <div className="service relative shadow-xl px-4 py-4 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl mb-4 relative z-50">
              Individualization Strategies
            </h1>
            <Meteors number={20} />
          </div>
        </div>
        <div className="w-full relative">
          <div className="service relative shadow-xl px-4 py-4 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl mb-4 relative z-50">
              AdapTable Solution
            </h1>
            <Meteors number={20} />
          </div>
        </div>
      </div>
        <p className="mt-10 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut expedita obcaecati sapiente vitae voluptatibus. Voluptatibus, nulla sint voluptates deleniti libero fugit incidunt quis, sapiente ullam et, hic praesentium recusandae quasi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus numquam ea ratione optio, molestias laudantium autem rerum quibusdam odit unde vero placeat temporibus eum animi aperiam cupiditate corporis tempore id?</p>
    </div>
  );
}

export default ProductService
