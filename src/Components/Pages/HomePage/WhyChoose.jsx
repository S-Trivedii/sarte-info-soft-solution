import { motion } from "framer-motion";
import Wrapper from "../../Wrapper";
import { CardRotate } from "../../ui/CardRotate";

const WhyChoose = () => {
  return (
    <div className="mt-[5em]">
      <Wrapper>
        <h1 className="flex flex-col items-center text-center justify-center sm:text-5xl text-3xl overflow-hidden">
          <motion.span
            initial={{ y: "70%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
          >
            {" "}
            <h1>Why Choose Us</h1>
          </motion.span>
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "8%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
            className="sm:border-2 border-[1.5px] border-[#18dae4] w-0 rounded-md"
          ></motion.span>
        </h1>
      </Wrapper>
      <div className="grid lg:grid-cols-2 items-center overflow-y-auto overflow-x-hidden gap-5 -mt-10">
        <div className="lg:block hidden">
          <p className="mb-10 text-xl font-semibold">
            Welcome to Sarte Infosoft & Solution, where your financial
            aspirations are our foremost concern. As a premier investment
            management service, we excel in providing outstanding investment
            experiences tailored to your unique requirements. With a steadfast
            commitment to integrity and accountability, we manage your
            Investment Amount with exceptional care. We don’t just make
            promises; we deliver results, focusing relentlessly on the growth of
            your investments. At Sarte Infosoft & Solution, we view ourselves as
            a family, dedicated to supporting and nurturing your financial
            journey every step of the way.
          </p>
          <div className="mb-5 sm:text-2xl text-xl">
            <p>🗸 Professionally Loaded Team</p>
            <p>🗸 Offering Premium Investment Solutions</p>
            <p>🗸 Ensuring 100% Client Satisfaction</p>
            <p>🗸 We are Fully Bonded and Insured</p>
          </div>
          <button className="bg-[#18dae4] text-black font-medium py-2 px-4 rounded transition-all hover:bg-[#0b9198] hover:text-white active:scale-95">
            Registration
          </button>
        </div>
        <div className="">
          <CardRotate />
        </div>
        <div className="lg:hidden block">
          <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-5 -mt-40">
            Trusted Over 4000+ Clients
          </h2>
          <p className="mb-10">
            Welcome to Marvellous Mining, where your financial goals become our
            priority. As a leading investment management service, we specialize
            in delivering exceptional investment experiences tailored to your
            needs. With a commitment to integrity and responsibility, we handle
            your hard-earned money with the utmost care.
          </p>
          <div className="mb-5 sm:text-2xl text-xs">
            <p>🗸 Professionally Loaded Team</p>
            <p>🗸 Offering Premium Investment Solutions</p>
            <p>🗸 Ensuring 100% Client Satisfaction</p>
            <p>🗸 We are Fully Bonded and Insured</p>
          </div>
          <button className="bg-[#18dae4] text-black font-medium py-2 px-4 rounded transition-all hover:bg-[#0b9198] hover:text-white active:scale-95">
            Find a class
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
