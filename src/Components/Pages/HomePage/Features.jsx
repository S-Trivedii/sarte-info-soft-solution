import { motion } from "framer-motion";
import { Meteors } from "../../ui/meteors";
import { SlCalender } from "react-icons/sl";
import { MdOutlineThumbUp } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";

const Features = () => {
  return (
    <div className="sm:mt-[3em] mt-[2em]">
      {" "}
      <div className="flex flex-col items-center text-center justify-center overflow-hidden">
        <motion.span
          initial={{ y: "70%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
        >
          {" "}
          <h1 className="sm:text-5xl text-3xl">Our Features</h1>
        </motion.span>
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "8%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
          className="sm:border-2 border-[1.5px] border-[#18dae4] w-0 sm:mb-2 rounded-md"
        ></motion.span>
      </div>
      <div className=" max-w-5xl mx-auto grid justify-center items-center text-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-8">
        <div className=" h-[20vh] relative">
          <div className="service relative shadow-xl px-3 py-1 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
            <SlCalender className="w-8 h-8 mb-5" />
            <h1 className="font-bold text-xl relative z-50">Monthly Payout</h1>
            <Meteors number={20} />
          </div>
        </div>
        <div className="h-[20vh] relative">
          <div className="service relative shadow-xl px-3 py-1 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
            <MdOutlineThumbUp className="w-8 h-8 mb-5" />
            <h1 className="font-bold text-xl relative z-50">
              Comprehensive Support
            </h1>
            <Meteors number={20} />
          </div>
        </div>
        <div className="h-[20vh] relative">
          <div className="service relative shadow-xl px-3 py-1 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
            <TiWeatherPartlySunny className="w-8 h-8 mb-5" />
            <h1 className="font-bold text-xl relative z-50">
              Safe and secured investments
            </h1>
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
