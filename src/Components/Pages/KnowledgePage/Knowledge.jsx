import { motion } from "framer-motion";
import know from "../../../assets/Know/know.jpg";
import Wrapper from "../../Wrapper";
import KnowFaq from "./KnowFaq";

const Knowledge = () => {
  return (
    <div className="mb-10">
      <div className="h-[50vh] w-full bg-dot-white/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 sm:flex hidden items-center justify-center bg-[#100f10] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
        <img
          className="h-full w-full object-cover md:px-[6em] px-[2em] md:py-10 py-5"
          src={know}
          alt=""
        />
      </div>
      <Wrapper>
        <div>
          <h1 className="flex flex-col items-center text-center justify-center sm:text-5xl text-3xl overflow-hidden">
            <motion.span
              initial={{ y: "70%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
            >
              {" "}
              <h1>Introduction</h1>
            </motion.span>
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "8%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
              className="sm:border-2 border-[1.5px] border-[#18dae4] w-0 sm:mb-5 rounded-md"
            ></motion.span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            possimus repudiandae maxime, consequuntur molestiae, esse rerum
            culpa alias itaque necessitatibus sapiente tempore odio architecto,
            aspernatur illum impedit id nemo praesentium! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Expedita cum, nam voluptas dolore
            enim blanditiis! Animi enim magni et eos corporis vero, suscipit
            culpa unde accusamus, asperiores officia quod tenetur?
          </p>
        </div>
        <div className="mt-10">
          <h1 className="flex flex-col items-center text-center justify-center sm:text-5xl text-3xl overflow-hidden">
            <motion.span
              initial={{ y: "70%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
            >
              <h1>CryptoCurrencies</h1>
            </motion.span>
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "8%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
              className="sm:border-2 border-[1.5px] border-[#18dae4] w-0 sm:mb-5 rounded-md"
            ></motion.span>
          </h1>
          <div className="flex flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos possimus repudiandae maxime, consequuntur molestiae,
              esse rerum culpa alias itaque necessitatibus sapiente tempore odio
              architecto, aspernatur illum impedit id nemo praesentium! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Expedita cum,
              nam voluptas dolore enim blanditiis! Animi enim magni et eos
              corporis vero, suscipit culpa unde accusamus, asperiores officia
              quod tenetur?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos possimus repudiandae maxime, consequuntur molestiae,
              esse rerum culpa alias itaque necessitatibus sapiente tempore odio
              architecto, aspernatur illum impedit id nemo praesentium! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Expedita cum,
              nam voluptas dolore enim blanditiis! Animi enim magni et eos
              corporis vero, suscipit culpa unde accusamus, asperiores officia
              quod tenetur?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos possimus repudiandae maxime, consequuntur molestiae,
              esse rerum culpa alias itaque necessitatibus sapiente tempore odio
              architecto, aspernatur illum impedit id nemo praesentium! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Expedita cum,
              nam voluptas dolore enim blanditiis! Animi enim magni et eos
              corporis vero, suscipit culpa unde accusamus, asperiores officia
              quod tenetur?
            </p>
          </div>
        </div>
      </Wrapper>
      <KnowFaq />
    </div>
  );
};

export default Knowledge;
